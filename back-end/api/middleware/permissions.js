const database = require('../models');

const permissions = (listPermissions) => {
  return async (req, res, next) => {
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
      return res.status(401).send('Usuário não cadastrado!');
    };

    const registeredPermissions = user.user_permissions
      .map((permission) => permission.name)
      .some((permission) => listPermissions.includes(permission))
    ;

    if (!registeredPermissions) {
      return res.status(401).send('Usuário não possui permissão para acessar essa rota!');
    }

    return next();
  }
}

module.exports = permissions;