const { DataTypes } = require('sequelize');
const sequelize = require('../configs/dbConfig');
const User = require('./user');
const Entity = require('./entity');

const UserEntity = sequelize.define('UserEntity', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  entityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Entity,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['userId', 'entityId'],
    },
  ],
});

module.exports = UserEntity;
