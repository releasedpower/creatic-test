const { DataTypes } = require('sequelize');
const sequelize = require('../configs/dbConfig');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Username is already taken.'
    },
    validate: {
      notNull: { msg: 'Username is required.' },
      notEmpty: { msg: 'Username cannot be empty.' },
      isValid(value) {
        if (value.trim().length === 0) {
          throw new Error('Username cannot be just whitespace.');
        }
      },
    },
    set(value) {
      this.setDataValue('username', value.trim());
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'This email is already registered.'
    },
    validate: {
      notNull: { msg: 'Email is required.' },
      isEmail: { msg: 'Must be a valid email address.' },
      isValid(value) {
        if (value.trim().length === 0) {
          throw new Error('Email cannot be just whitespace.');
        }
      },
    },
    set(value) {
      this.setDataValue('email', value.trim());
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Password is required.' },
      notEmpty: { msg: 'Password cannot be empty.' },
      isValid(value) {
        if (value.trim().length === 0) {
          throw new Error('Password cannot be just whitespace.');
        }
      },
    },
    set(value) {
      this.setDataValue('password', value.trim());
    },
  },
});

module.exports = User;
