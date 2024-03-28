const { DataTypes } = require("sequelize");

function createUserModel(sequelize){
    const UserModel = sequelize.define(
        'users', {
        // Model attributes are defined here
        id: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true,
  
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique:true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
          
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      });

      return UserModel;

}

module.exports = createUserModel;
