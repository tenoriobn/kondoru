import { NextFunction, Response } from 'express';
import database from '../database/models'; 
import { AuthenticatedRequest } from '../interface/auth';
import AppError from '../utils/appError';

const roles = (listRoles: string[]) => {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req;

    const user = await database.users.findOne({
      include: [
        {
          model: database.roles,
          as: 'user_roles',
          attributes: ['id', 'name']
        }
      ],
      where: {
        id: userId
      }
    });

    if (!user) {
      throw new AppError('Usuário não cadastrado!', 401);
    }

    const registeredRoles = user.user_roles
      .map((role: { name: string }) => role.name)
      .some((role: string) => listRoles.includes(role));

    if (!registeredRoles) {
      throw new AppError('Usuário não possui permissão para acessar essa rota!', 401);
    }

    return next();
  };
};

export default roles;
