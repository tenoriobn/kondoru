/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class permissions extends Model {
    static associate(models: any) {
      permissions.belongsToMany(models.users, {
        through: models.users_permissions,
        as: 'permission_users',
        foreignKey: 'permission_id'
      });

      permissions.belongsToMany(models.roles, {
        through: models.roles_permissions,
        as: 'permission_roles',
        foreignKey: 'permission_id'
      });
    }
  }
  
  permissions.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'permissions',
  });

  return permissions;
};