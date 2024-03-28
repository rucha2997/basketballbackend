const { Sequelize } = require('sequelize');
const createUserModel = require('../models/user.model');
const createGameModel = require('../models/game.model');
const sequelize = new Sequelize(process.env.DB_CONNECTION, {
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  });
  
const userModel =createUserModel(sequelize);
const gameModel =createGameModel(sequelize);
userModel.hasMany(gameModel);
gameModel.belongsTo(userModel)

module.exports ={ sequelize,userModel,gameModel};