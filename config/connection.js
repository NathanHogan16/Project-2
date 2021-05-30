// import the Sequelize constructor from the library
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('recipes', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

module.exports = sequelize;