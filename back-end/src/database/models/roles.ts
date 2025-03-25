/* eslint-disable @typescript-eslint/no-explicit-any */
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
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
  });
  
  return Roles;
};