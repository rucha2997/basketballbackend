"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("games", "userId", {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: "users",
          schema: "public",
        },
        key: "id",
      },
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("games", "games_userId_fkey");
    await queryInterface.removeColumn("games", "userId");
  },
};