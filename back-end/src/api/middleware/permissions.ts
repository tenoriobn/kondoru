import { NextFunction, Request, Response } from "express";
import database from '../models'; 

const permissions = (listPermissions: string[]) => {
  return async (req: Request<{ userId: string }>, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req;

    const user = await database.users.findOne({
      include: [
        {
          model: database.permissions,
          as: 'user_permissions',
          attributes: ['id', 'name']
        }
      ],
      where: {
        id: userId
      }
    });

    if (!user) {
      res.status(401).send('Usuário não cadastrado!');
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
  }
}

module.exports = permissions;