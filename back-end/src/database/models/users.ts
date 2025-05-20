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
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notNull: { msg: 'O campo "nome" não pode ser nulo!' },
        notEmpty: { msg: 'O campo "nome" não pode estar vazio!' },
        len: {
          args: [3, 150],
          msg: 'o campo "nome" deve ter no mínimo 3 caracteres'
        },
      }
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'O campo "email" não pode ser nulo!' },
        notEmpty: { msg: 'O campo "email" não pode estar vazio!' },
        isEmail: { msg: 'O Email informado não é válido!' },
        len: {
          args: [3, 50],
          msg: 'o campo "email" deve ter no mínimo 3 caracteres'
        },
      }
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: { msg: 'O campo "data de nascimento" não pode ser nulo!' },
        notEmpty: { msg: 'O campo "data de nascimento" não pode estar vazio!' },
      }
    },
    phone: {
      type: DataTypes.STRING(17),
      allowNull: false,
      validate: {
        notNull: { msg: 'O campo "telefone" não pode ser nulo!' },
        notEmpty: { msg: 'O campo "telefone" não pode estar vazio!' },
        len: {
          args: [10, 17],
          msg: 'o campo "telefone" deve ter no mínimo 10 caracteres'
        },
      }
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notNull: { msg: 'O campo "senha" não pode ser nulo!' },
        notEmpty: { msg: 'O campo "senha" não pode estar vazio!' },
        len: {
          args: [6, 150],
          msg: 'o campo "senha" deve ter no mínimo 6 caracteres'
        },
      }
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