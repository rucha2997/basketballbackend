'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('games', 'gametime');
    await queryInterface.addColumn('games', 'gametime',{
      type:DataTypes.DATE,
      allowNull:false,
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('games', 'gametime');
    await queryInterface.addColumn('games', 'gametime',{
      type:DataTypes.STRING,
      allowNull:false,
    });
  }
};
