// import the Sequelize constructor from the library
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('recipes', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

module.exports = sequelize;


// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });
// }