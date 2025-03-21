import { NextFunction, Request, Response } from "express";
import database from '../models'; 
import { AuthenticatedRequest } from "interface/auth";

const roles = (listRoles: string[]) => {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req;

    try {
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
        res.status(401).send('Usuário não cadastrado!');
        return ;
      }

      const registeredRoles = user.user_roles
        .map((role: { name: string }) => role.name)
        .some((role: string) => listRoles.includes(role));

      if (!registeredRoles) {
        res.status(401).send('Usuário não possui acesso a essa rota!');
        return;
      }

      return next();
    } catch (error) {
      res.status(500).send('Erro ao verificar permissões.');
      return; 
    }
  };
};

export default roles;
