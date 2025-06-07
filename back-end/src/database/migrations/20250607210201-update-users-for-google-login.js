'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'date_of_birth', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.changeColumn('users', 'phone', {
      type: Sequelize.STRING(17),
      allowNull: true,
    });

    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING(150),
      allowNull: true,
    });

    await queryInterface.addColumn('users', 'google_id', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    });

    await queryInterface.addColumn('users', 'provider', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 'local',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'date_of_birth', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });

    await queryInterface.changeColumn('users', 'phone', {
      type: Sequelize.STRING(17),
      allowNull: false,
    });

    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING(150),
      allowNull: false,
    });

    await queryInterface.removeColumn('users', 'google_id');
    await queryInterface.removeColumn('users', 'provider');
  }
};
