'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class Users extends Model {
    static associate(models: any) {
      Users.belongsToMany(models.Roles, {
        through: models.UsersRoles,
        as: 'user_roles',
        foreignKey: 'user_id'
      });
      Users.belongsToMany(models.Permissions, {
        through: models.UsersPermissions,
        as: 'user_permissions',
        foreignKey: 'user_id'
      });
      Users.hasMany(models.PasswordResetTokens, {
        foreignKey: 'user_id',
        as: 'password_reset_tokens'
      });
    }
  }

  Users.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(17),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  });

  return Users;
};