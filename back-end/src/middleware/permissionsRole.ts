import { NextFunction, Response } from 'express';
import database from '../database/models'; 
import Sequelize from 'sequelize';
import { PermissionsRole, UserRole } from '../interface/role';
import { AuthenticatedRequest } from '../interface/auth';
import AppError from '../utils/appError';

const permissionsRole = (listPermissions: string[]) => {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req;

    const user = await database.Users.findOne({
      include: [
        {
          model: database.Roles,
          as: 'user_roles',
          attributes: ['id', 'name']
        }
      ],
      where: {
        id: userId
      }
    })  as UserRole;

    if (!user) {
      res.status(401).send('Usuário e/ou senha inválidos');
      return; 
    };

    const listRolesId: number[] = [];

    Object.values(user.user_roles).map((role) => {
      listRolesId.push(role.id);
    });

    if (listRolesId.length === 0) {
      res.status(401).send('Usuário não possui permissão para acessar essa rota!');
      return; 
    }

    const roles = await database.Roles.findAll({
      include: [
        {
          model: database.Permissions,
          as: 'role_permissions',
          attributes: ['id', 'name']
        }
      ],
      where: {
        id: {
          [Sequelize.Op.in]: listRolesId
        }
      }
    });

    let hasPermissions = false;

    roles.map((role: PermissionsRole) => {
      hasPermissions = role.role_permissions
        .map((permission: { name: string }) => permission.name)
        .some((permission: string) => listPermissions.includes(permission));
    });

    if (!hasPermissions) {
      throw new AppError('Usuário não possui permissão para acessar essa rota!', 401);
    }

    return next();
  };
};

export default permissionsRole;