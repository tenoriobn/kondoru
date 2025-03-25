'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class RolesPermissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  
  RolesPermissions.init({
    role_id: DataTypes.UUID,
    permission_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'RolesPermissions',
    tableName: 'roles_permissions',
  });

  return RolesPermissions;
};