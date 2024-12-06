const database = require('../models');
const { hash } = require('bcryptjs');
const uuid = require('uuid');

class UserService {
  async register(dto) {
    const user = await database.users.findOne({where: { email: dto.email }});

    if (user) {
      throw new Error('Usuário já cadastrado!');
    };

    try {
      const hashPassword = await hash(dto.password, 8);

      const newPassword = await database.users.create({
        id: uuid.v4(),
        name: dto.name,
        email: dto.email,
        password: hashPassword
      });

      return newPassword;
    } catch (error) {
      throw new Error('Erro ao cadastrar usuario');
    }
  };

  async getAllUsers() {
    const users = await database.users.findAll();
    return users;
  } ;

  async getUserById(id) {
    const user = await database.users.findOne({ where: { id: id }});

    if (!user) {
      throw new Error('Usuário informado não cadastrado!')
    };

    return user;
  };

  async updateUser(dto) {
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

  async deleteUser(id) {
    await this.getUserById(id);

    try {
      await database.users.destroy({where: { id: id }});
    } catch (error) {
      throw new Error('Erro ao tentar deletar o usuario!');
    }
  };
}

module.exports = UserService;