'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING, // Add the email attribute
    password: DataTypes.STRING // Add the password attribute
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
