import { AuthData } from '../interface/auth';
import database from '../database/models'; 
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import jsonSecret from '../database/config/jsonSecret';
import AppError from '../utils/appError';

class AuthService {
  async login(dto: AuthData) {
    const user = await database.Users.findOne({
      attributes: ['id', 'email', 'password'],
      where: {
        email: dto.email
      }
    });

    if (!user) {
      throw new AppError('Usuário não cadastrado!', 404);
    };

    const samePasswords = await compare(dto.password, user.password);

    if(!samePasswords) {
      throw new AppError('Usuário ou senha inválido!', 401);
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

export default AuthService;