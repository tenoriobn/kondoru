'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('roles', 'name', {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    });

    await queryInterface.changeColumn('roles', 'description', {
      type: Sequelize.STRING(500),
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('roles', 'name', {
      type: Sequelize.STRING
    });

    await queryInterface.changeColumn('roles', 'description', {
      type: Sequelize.STRING
    });
  }
};
