'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      roles.belongsToMany(models.users, {
        through: models.users_roles,
        as: 'role_users',
        foreignKey: 'role_id'
      });

      roles.belongsToMany(models.permissions, {
        through: models.roles_permissions,
        as: 'role_permissions',
        foreignKey: 'role_id'
      });
    }
  }

  roles.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
  });
  
  return roles;
};