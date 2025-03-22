import { Response, NextFunction } from 'express';
import { verify, decode } from 'jsonwebtoken';
import jsonSecret from '../database/config/jsonSecret';
import { AuthenticatedRequest } from '../interface/auth';

const authenticated = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send('Access token não informado');
    return;
  }

  const [, accessToken] = token.split(' ');

  try {
    verify(accessToken, jsonSecret.secret);
    const decoded = decode(accessToken) as { id: string; email: string } | null;

    if (decoded) {
      req.userId = decoded.id;
      req.userEmail = decoded.email;
    }

    next();
  } catch (error) {
    res.status(401).send('Usuário não autorizado');
  }
};

export default authenticated;
