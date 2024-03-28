const { DataTypes } = require("sequelize");

function createGameModel(sequelize) {
  const GameModel = sequelize.define("games", {
    id: {
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
      type: DataTypes.DATE,
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
      },
  });

  return GameModel;
}

module.exports = createGameModel;