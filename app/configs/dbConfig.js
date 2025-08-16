const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'creatic_test', //db name
  'root', // mysql username
  '', // mysql password
  {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize.authenticate()
  .then(() => console.log('Connexion à la bdd réussie.'))
  .catch(err => console.error('Erreur de connexion à la bdd', err));

module.exports = sequelize;
