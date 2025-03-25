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
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permissions',
    tableName: 'permissions',
  });

  return Permissions;
};