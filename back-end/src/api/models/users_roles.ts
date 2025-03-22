'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class users_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }

  users_roles.init({
    user_id: DataTypes.UUID,
    role_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'users_roles',
  });

  return users_roles;
};