const sequelize = require('../configs/dbConfig'); // Sequelize instance
const Entity = require('./entity');
const User = require('./user');

const db = {
  sequelize,
  Entity,
  User
};

module.exports = db;
