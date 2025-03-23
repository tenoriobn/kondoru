import database from '../database/models'; 
import { hash } from 'bcryptjs';
import { UserData, UserRegisterData } from '../interface/user';
import { v4 as uuidv4 } from 'uuid';
import AppError from '../utils/appError';

class UserService {
  async register(dto: UserRegisterData) {
    const user = await database.users.findOne({where: { email: dto.email }});

    if (user) {
      throw new AppError('Usuário já cadastrado!', 409);
    };

    const hashPassword = await hash(dto.password, 8);

    return database.users.create({
      id: uuidv4(),
      name: dto.name,
      email: dto.email,
      date_of_birth: dto.date_of_birth,
      phone: dto.phone,
      password: hashPassword
    });
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

    if (users.length < 1) {
      throw new AppError('Nenhum usuário encontrado!', 404);
    };

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
      throw new AppError('Usuário informado não cadastrado!', 404);
    };

    return user;
  };

  async updateUser(dto: Required<UserData>) {
    const user = await this.getUserById(dto.id);
    
    user.name = dto.name;
    user.email = dto.email;
    await user.save();

    return user;
  };

  async deleteUser(id: string) {
    await this.getUserById(id);
    await database.users.destroy({where: { id: id }});
  };
}

export default UserService;