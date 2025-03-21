import database from '../models'; 
import { hash } from 'bcryptjs';
import { UserData, UserRegisterData } from 'interface/user';
import { v4 as uuidv4 } from 'uuid';

class UserService {
  async register(dto: UserRegisterData) {
    const user = await database.users.findOne({where: { email: dto.email }});

    if (user) {
      throw new Error('Usuário já cadastrado!');
    };

    try {
      const hashPassword = await hash(dto.password, 8);

      const newPassword = await database.users.create({
        id: uuidv4(),
        name: dto.name,
        email: dto.email,
        date_of_birth: dto.date_of_birth,
        phone: dto.phone,
        password: hashPassword
      });

      return newPassword;
    } catch (error) {
      console.log('error:', error)
      throw new Error('Erro ao cadastrar usuario');
    }
  };

  async getAllUsers() {
    const users = await database.users.findAll({
      include: [
        {
          model: database.roles,
          as: 'user_roles',
          attributes: ['id', 'name', 'description'],
          through: {
              attributes: [],
          },
          include: [
            {
              model: database.permissions,
              as: 'role_permissions',
              attributes: ['id', 'name', 'description'],
            }
          ],
        },
      ]
    });

    return users;
  } ;

  async getUserById(id: string) {
    const user = await database.users.findOne({ 
      include: [
        {
          model: database.roles,
          as: 'user_roles',
          attributes: ['id', 'name', 'description'],
          through: {
              attributes: [],
          },
          include: [
            {
              model: database.permissions,
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
      throw new Error('Usuário informado não cadastrado!')
    };

    return user;
  };

  async updateUser(dto: Required<UserData>) {
    const user = await this.getUserById(dto.id);

    try {
      user.name = dto.name;
      user.email = dto.email;
      await user.save();
      return user;
    } catch (error) {
      throw new Error('Erro ao editar usuario!');
    }
  };

  async deleteUser(id: string) {
    await this.getUserById(id);

    try {
      await database.users.destroy({where: { id: id }});
    } catch (error) {
      throw new Error('Erro ao tentar deletar o usuario!');
    }
  };
}

export default UserService;