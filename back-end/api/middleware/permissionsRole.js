const Sequelize = require('sequelize');
const database = require('../models');

const permissionsRole = (listPermissions) => {
  return async (req, res, next) => {
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
      return res.status(401).send('Usuário não cadastrado!');
    };

    let listRolesId = [];

    Object.values(user.user_roles).map((role) => {
      listRolesId.push(role.id)
    });

    if (listRolesId.length === 0) {
      return res.status(401).send('Usuário não possui permissão para acessar essa rota!');
    }

    const roles = await database.roles.findAll({
      include: [
        {
          model: database.permissions,
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

    roles.map((role) => {
      hasPermissions = role.role_permissions
        .map((permission) => permission.name)
        .some((permission) => listPermissions.includes(permission))
    });

    if (!hasPermissions) {
      return res.status(401).send('Usuário não possui permissão para acessar essa rota!');
    }

    return next();
  }
}

module.exports = permissionsRole;