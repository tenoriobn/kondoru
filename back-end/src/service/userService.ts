import database from '../database/models'; 
import { hash } from 'bcryptjs';
import { UserData, UserRegisterData } from '../interface/user';
import { v4 as uuidv4 } from 'uuid';
import AppError from '../utils/appError';
import { Op } from 'sequelize';
class UserService {
  async register(dto: UserRegisterData) {
    if (!dto.email) {
      throw new AppError('O campo email é obrigatório!', 400);
    }

    const user = await database.Users.findOne({where: { email: dto.email }});

    if (user) {
      throw new AppError('Usuário já cadastrado!', 409);
    };

    if (!dto.password) {
      throw new AppError('O campo senha é obrigatório!', 400);
    }

    const hashPassword = await hash(dto.password, 8);

    return database.Users.create({
      id: uuidv4(),
      name: dto.name,
      email: dto.email,
      date_of_birth: dto.date_of_birth,
      phone: dto.phone,
      password: hashPassword
    });
  };

  async getAllUsers() {
    const users = await database.Users.findAll({
      include: [
        {
          model: database.Roles,
          as: 'user_roles',
          attributes: ['id', 'name', 'description'],
          through: {
            attributes: [],
          },
          include: [
            {
              model: database.Permissions,
              as: 'role_permissions',
              attributes: ['id', 'name', 'description'],
            }
          ],
        },
        {
          model: database.Permissions,
          as: 'user_permissions',
          attributes: ['id', 'name', 'description']
        }
      ]
    });

    if (users.length < 1) {
      throw new AppError('Nenhum usuário encontrado!', 404);
    };

    return users;
  } ;

  async getUserById(id: string) {
    const user = await database.Users.findOne({ 
      include: [
        {
          model: database.Roles,
          as: 'user_roles',
          attributes: ['id', 'name', 'description'],
          through: {
            attributes: [],
          },
          include: [
            {
              model: database.Permissions,
              as: 'role_permissions',
              attributes: ['id', 'name', 'description'],
            }
          ],
        },
      ],
      where: { 
        id: id 
      }
    });

    if (!user) {
      throw new AppError('Usuário informado não cadastrado!', 404);
    };

    return user;
  };

  async updateUser(dto: Required<UserData>) {
    const user = await this.getUserById(dto.id);
  
    if (dto.email && dto.email !== user.email) {
      const emailExists = await database.Users.findOne({
        where: { email: dto.email },
        attributes: ['id']
      });
  
      if (emailExists) {
        throw new AppError('Este e-mail já está em uso. Escolha outro.', 409);
      }
    }
    
    await user.update(dto, { validate: true, fields: Object.keys(dto) });

    return user;
  };

  async deleteUser(id: string) {
    await this.getUserById(id);
    await database.Users.destroy({where: { id: id }});
  };

  async forgotPassword(email: string) {
    const user = await database.Users.findOne({where: { email } });

    if (!user) {
      throw new AppError('Email não cadastrado.', 404);
    };

    const token = uuidv4();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 30);

    await database.PasswordResetTokens.create({
      id: uuidv4(),
      user_id: user.id,
      token,
      expires_at: expiresAt,
    });

    const resetUrl = `Token para trocar senha: ${token}`;
    return resetUrl;
  };

  async verifyResetToken(token: string) {
    const tokenFound = await database.PasswordResetTokens.findOne({ 
      where: { 
        token: token,
        expires_at: { [Op.gt]: new Date() }
      } 
    });

    if (!tokenFound) {
      throw new AppError('Token inválido ou expirado.', 400);
    }

    return tokenFound;
  }

  async resetPassword(dto: { token: string, password: string }) {
    const reset = await this.verifyResetToken(dto.token);

    const user = await database.Users.findByPk(reset.user_id);
    const hashPassword = await hash(dto.password, 8);

    await user.update({ password: hashPassword });
    
    await database.PasswordResetTokens.destroy({ where: { token: dto.token} });

    return { message: 'Senha redefinida com sucesso.' };
  };
}

export default UserService;