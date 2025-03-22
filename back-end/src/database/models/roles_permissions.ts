'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class roles_permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  
  roles_permissions.init({
    role_id: DataTypes.UUID,
    permission_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'roles_permissions',
  });

  return roles_permissions;
};