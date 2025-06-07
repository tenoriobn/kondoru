import { v4 as uuidv4 } from 'uuid';
import { compare } from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import database from '../database/models'; 
import AppError from '../utils/appError';
import { generateToken } from '../utils/generateToken';
import { AuthData } from '../interface/auth';

class AuthService {
  async login(credentials: AuthData) {
    const user = await database.Users.findOne({ 
      attributes: ['id', 'email', 'password'],
      where: { email: credentials.email } 
    });

    if (!user) throw new AppError('Credenciais inválidas', 401);

    const passwordMatch = await compare(credentials.password, user.password);

    if(!passwordMatch) throw new AppError('Credenciais inválidas', 401);

    const accessToken = generateToken({ id: user.id, email: user.email });

    return { accessToken };
  }

  async loginWithGoogle(authCode: string) {
    const client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'postmessage'
    );

    const { tokens } = await client.getToken(authCode);

    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload) throw new AppError('Token inválido do Google', 400);

    const { sub: googleId, name, email } = payload;

    if (!email) throw new AppError('E-mail não disponível via Google', 400);

    let user = await database.Users.findOne({ where: { email } });

    if (!user) {
      user = await database.Users.create({
        id: uuidv4(),
        email,
        name,
        google_id: googleId,
      });
    }

    const accessToken = generateToken({ id: user.id, email: user.email });

    return { user, accessToken };
  }
}

export default AuthService;