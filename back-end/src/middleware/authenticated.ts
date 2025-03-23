import { Response, NextFunction } from 'express';
import { verify, decode } from 'jsonwebtoken';
import jsonSecret from '../database/config/jsonSecret';
import { AuthenticatedRequest } from '../interface/auth';
import AppError from '../utils/appError';

const authenticated = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError('Access token não informado', 401);
  }

  const [, accessToken] = token.split(' ');

  verify(accessToken, jsonSecret.secret);
  const decoded = decode(accessToken) as { id: string; email: string } | null;

  if (decoded) {
    req.userId = decoded.id;
    req.userEmail = decoded.email;
  }

  next();
};

export default authenticated;
