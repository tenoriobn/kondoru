'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class users_permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  users_permissions.init({
    user_id: DataTypes.UUID,
    permission_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'users_permissions',
  });

  return users_permissions;
};