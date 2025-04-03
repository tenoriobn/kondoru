/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class Permissions extends Model {
    static associate(models: any) {
      Permissions.belongsToMany(models.Users, {
        through: models.UsersPermissions,
        as: 'permission_users',
        foreignKey: 'permission_id'
      });

      Permissions.belongsToMany(models.Roles, {
        through: models.RolesPermissions,
        as: 'permission_roles',
        foreignKey: 'permission_id'
      });
    }
  }
  
  Permissions.init({
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
    modelName: 'Permissions',
    tableName: 'permissions',
  });

  return Permissions;
};