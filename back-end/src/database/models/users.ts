/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      users.belongsToMany(models.roles, {
        through: models.users_roles,
        as: 'user_roles',
        foreignKey: 'user_id'
      });
      users.belongsToMany(models.permissions, {
        through: models.users_permissions,
        as: 'user_permissions',
        foreignKey: 'user_id'
      });
    }
  }

  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    date_of_birth: DataTypes.DATEONLY,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  });

  return users;
};