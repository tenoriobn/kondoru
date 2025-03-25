/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      Users.belongsToMany(models.Roles, {
        through: models.UsersRoles,
        as: 'user_roles',
        foreignKey: 'user_id'
      });
      Users.belongsToMany(models.Permissions, {
        through: models.UsersPermissions,
        as: 'user_permissions',
        foreignKey: 'user_id'
      });
    }
  }

  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    date_of_birth: DataTypes.DATEONLY,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  });

  return Users;
};