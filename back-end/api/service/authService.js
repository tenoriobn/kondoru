const database = require ('../models');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

class AuthService {
  async login(dto) {
    const user = await database.users.findOne({
      attributes: ['id', 'email', 'password'],
      where: {
        email: dto.email
      }
    });

    if (!user) {
      throw new Error('Usuário não cadastrado!')
    };

    const samePasswords = await compare(dto.password, user.password);

    if(!samePasswords) {
      throw new Error(`Usuário ou senha inválido!`);
    };

    const accessToken = sign(
      {
        id: user.id,
        email: user.email
      },
      jsonSecret.secret,
      { expiresIn: '1d' }
    );

    return { accessToken };
  }
}

module.exports = AuthService; 