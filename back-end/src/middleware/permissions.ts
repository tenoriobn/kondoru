import { NextFunction, Request, Response } from 'express';
import database from '../database/models'; 

const permissions = (listPermissions: string[]) => {
  return async (req: Request<{ userId: string }>, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req;

    const user = await database.Users.findOne({
      include: [
        {
          model: database.Permissions,
          as: 'user_permissions',
          attributes: ['id', 'name']
        }
      ],
      where: {
        id: userId
      }
    });

    if (!user) {
      res.status(401).send('Usuário e/ou senha inválidos');
      return; 
    };

    const registeredPermissions = user.user_permissions
      .map((permission: { name: string }) => permission.name)
      .some((permission: string) => listPermissions.includes(permission))
    ;

    if (!registeredPermissions) {
      res.status(401).send('Usuário não possui permissão para acessar essa rota!');
      return; 
    }

    return next();
  };
};

export default permissions;