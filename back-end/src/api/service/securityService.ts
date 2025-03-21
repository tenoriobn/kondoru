import { RegisterAclData, RegisterPermissionsRolesData } from 'interface/security';
import database from '../models'; 
import Sequelize from 'sequelize'

class SecurityService {
  async registerAcl(dto: RegisterAclData) {
    const user = await database.users.findOne({
      include: [
        {
          model: database.roles,
          as: 'user_roles',
          attributes: ['id', 'name', 'description']
        },
        {
          model: database.permissions,
          as: 'user_permissions',
          attributes: ['id', 'name', 'description']
        }
      ],
      where: { 
        id: dto.userId 
      }
    });

    if (!user) {
      throw new Error('Usuário não cadastrado!');
    };

    const registeredRoles = await database.roles.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: dto.roles
        }
      }
    });

    const registeredPermissions = await database.permissions.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: dto.permissions
        }
      }
    });

    await user.removeUser_roles(user.user_roles);
    await user.removeUser_permissions(user.user_permissions);

    await user.addUser_roles(registeredRoles);
    await user.addUser_permissions(registeredPermissions);

    const newUser = await database.users.findOne({
      include: [
        {
          model: database.roles,
          as: 'user_roles',
          attributes: ['id', 'name', 'description']
        },
        {
          model: database.permissions,
          as: 'user_permissions',
          attributes: ['id', 'name', 'description']
        }
      ],
      where: { 
        id: dto.userId 
      }
    });

    return newUser;
  };

  async registerPermissionsRoles(dto: RegisterPermissionsRolesData) {
    const role = await database.roles.findOne({
      include: [
        {
          model: database.permissions,
          as: 'role_permissions',
          attributes: ['id', 'name', 'description']
        }
      ],
      where: { 
        id: dto.roleId
      }
    });

    if (!role) {
      throw new Error('Role não cadastrada!');
    };

    const registeredPermissions = await database.permissions.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: dto.permissions
        }
      }
    });

    await role.removeRole_permissions(role.role_permissions);
    await role.addRole_permissions(registeredPermissions);

    const newRole = await database.roles.findOne({
      include: [
        {
          model: database.permissions,
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