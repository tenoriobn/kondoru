'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class UsersRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  UsersRoles.init({
    user_id: DataTypes.UUID,
    role_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UsersRoles',
    tableName: 'users_roles',
  });

  return UsersRoles;
};