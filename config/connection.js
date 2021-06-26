// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// to keep db password hidden
require('dotenv').config();

// Create connection to the database, pass in  MySQL information for username and password
let sequelize;

// JAWSDB in heroku (heroku create, go to resources and search add on jawsdb MySql)
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;