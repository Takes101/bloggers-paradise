const Sequelize = require('sequelize');



// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      user: 'root',
      dialect: 'mysql',
      password: 'lotterywinner34',
      port: 3306
    });

module.exports = sequelize;
