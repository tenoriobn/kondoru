'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class PasswordResetTokens extends Model {
    static associate(models: any) {
      PasswordResetTokens.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  PasswordResetTokens.init({
    token: DataTypes.STRING,
    expires_at: DataTypes.DATE,
    user_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'PasswordResetTokens',
    tableName: 'password_reset_tokens',
  });

  return PasswordResetTokens;
};