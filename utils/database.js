const Sequelize = require("sequelize");
const database = "family_api_dev";
const username = "development";
const password = "development";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// validate our connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
