const database = require('../models');

const roles = (listRoles) => {
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

    const registeredRoles = user.user_roles
      .map((role) => role.name)
      .some((role) => listRoles.includes(role))
    ;

    if (!registeredRoles) {
      return res.status(401).send('Usuário não possui acesso a essa rota!');
    }

    return next();
  }
}

module.exports = roles;