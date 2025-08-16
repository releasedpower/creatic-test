const { DataTypes } = require('sequelize');
const sequelize = require('../configs/dbConfig');

const Entity = sequelize.define('Entity', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Name is required.' },
      notEmpty: { msg: 'Name cannot be empty.' },
      isValid(value) {
        if (value.trim().length === 0) {
          throw new Error('Name cannot be just whitespace.');
        }
      },
    },
    set(value) {
      this.setDataValue('name', value.trim());
    },
  },
});

module.exports = Entity;
