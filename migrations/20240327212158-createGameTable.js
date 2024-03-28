'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('games', {id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    hometeam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    awayteam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gametime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isLive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isOver: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    hometeamScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    awayteamScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    quarter: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    minutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    seconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },});

  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('games');
    
  }
};
