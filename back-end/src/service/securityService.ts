import { RegisterRoleUserData, RegisterPermissionsRolesData, RegisterPermissionsUserData } from '../interface/security';
import database from '../database/models'; 
import Sequelize from 'sequelize';
import AppError from '../utils/appError';

class SecurityService {
  async registerRoleUser(dto: RegisterRoleUserData) {
    const user = await database.Users.findOne({
      include: [
        {
          model: database.Roles,
          as: 'user_roles',
          attributes: ['id', 'name', 'description']
        },
        {
          model: database.Permissions,
          as: 'user_permissions',
          attributes: ['id', 'name', 'description']
        }
      ],
      where: { 
        id: dto.userId 
      }
    });

    if (!user) {
      throw new AppError('Usuário e/ou senha inválidos!', 401);
    };

    const registeredRoles = await database.Roles.findOne({
      where: {
        id: dto.roleId
      }
    });

    await user.removeUser_roles(user.user_roles);

    await user.addUser_roles(registeredRoles);

    const newUser = await database.Users.findOne({
      include: [
        {
          model: database.Roles,
          as: 'user_roles',
          attributes: ['id', 'name', 'description'],
          include: [
            {
              model: database.Permissions,
              as: 'role_permissions',
              attributes: ['id', 'name', 'description'],
            }
          ],
        },
      ],
      where: { 
        id: dto.userId 
      }
    });

    return newUser;
  };

  async registerPermissionsUser(dto: RegisterPermissionsUserData) {
    const user = await database.Users.findOne({
      include: [
        {
          model: database.Permissions,
          as: 'user_permissions',
          attributes: ['id', 'name', 'description']
        }
      ],
      where: { 
        id: dto.userId 
      }
    });

    if (!user) {
      throw new AppError('Usuário e/ou senha inválidos!', 401);
    };

    const registeredPermissions = await database.Permissions.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: dto.permissionsId
        }
      }
    });

    await user.removeUser_permissions(user.user_permissions);

    await user.addUser_permissions(registeredPermissions);

    const newUser = await database.Users.findOne({
      include: [
        {
          model: database.Permissions,
          as: 'user_permissions',
          attributes: ['id', 'name', 'description'],
        },
      ],
      where: { 
        id: dto.userId 
      }
    });

    return newUser;
  };

  async registerPermissionsRoles(dto: RegisterPermissionsRolesData) {
    const role = await database.Roles.findOne({
      include: [
        {
          model: database.Permissions,
          as: 'role_permissions',
          attributes: ['id', 'name', 'description']
        }
      ],
      where: { 
        id: dto.roleId
      }
    });

    if (!role) {
      throw new AppError('Role não cadastrada!', 404);
    };

    const registeredPermissions = await database.Permissions.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: dto.permissionsId
        }
      }
    });

    await role.removeRole_permissions(role.role_permissions);
    await role.addRole_permissions(registeredPermissions);

    const newRole = await database.Roles.findOne({
      include: [
        {
          model: database.Permissions,
          as: 'role_permissions',
          attributes: ['id', 'name', 'description']
        }
      ],
      where: { 
        id: dto.roleId
      }
    });

    return newRole;
  };
}

export default SecurityService;
