'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      Roles.belongsToMany(models.Users, {
        through: models.UsersRoles,
        as: 'role_users',
        foreignKey: 'role_id'
      });

      Roles.belongsToMany(models.Permissions, {
        through: models.RolesPermissions,
        as: 'role_permissions',
        foreignKey: 'role_id'
      });
    }
  }

  Roles.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'O campo "nome" não pode ser nulo!' },
        notEmpty: { msg: 'O campo "nome" não pode estar vazio!' },
        len: {
          args: [3, 50],
          msg: 'o campo "nome" deve ter no mínimo 3 caracteres'
        },
      }
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        notNull: { msg: 'O campo "descrição" não pode ser nulo!' },
        notEmpty: { msg: 'O campo "descrição" não pode estar vazio!' },
        len: {
          args: [10, 500],
          msg: 'o campo "descrição" deve ter no mínimo 10 caracteres'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Roles',
    tableName: 'roles',
  });
  
  return Roles;
};