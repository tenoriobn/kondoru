'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('permissions', 'name', {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    });

    await queryInterface.changeColumn('permissions', 'description', {
      type: Sequelize.STRING(500),
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('permissions', 'name', {
      type: Sequelize.STRING
    });

    await queryInterface.changeColumn('permissions', 'description', {
      type: Sequelize.STRING
    });
  }
};
