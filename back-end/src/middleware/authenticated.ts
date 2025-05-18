import { Response, NextFunction } from 'express';
import { verify, decode, TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';
import jsonSecret from '../database/config/jsonSecret';
import { AuthenticatedRequest } from '../interface/auth';
import AppError from '../utils/appError';

const authenticated = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization;

  if (!token) {
    return next(new AppError('Access token não informado', 401));
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
    if (error instanceof TokenExpiredError) {
      return next(new AppError('Token expirado', 401));
    };

    if (error instanceof JsonWebTokenError) {
      return next(new AppError('Token inválido', 401));
    }

    return next(new AppError('Erro na autenticação', 500));
  }

};

export default authenticated;
