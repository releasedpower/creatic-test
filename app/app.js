const express = require('express');
const app = express();
const sequelize = require('./configs/dbConfig');
const entityRoutes = require('./routes/entityRoutes');
const userRoutes = require('./routes/userRoutes');
const userEntityRoutes = require('./routes/userEntityRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/entities', entityRoutes);
app.use('/users', userRoutes);
app.use('/user-entities', userEntityRoutes);

const start = async () => {
  try {
    await sequelize.sync({ alter: true }); // update tables if needed
    app.listen(3000, () => {
      console.log('Server started at http://localhost:3000');
    });
  } catch (error) {
    console.error('Failed to start db or server', error);
  }
};

start();
