const Sequelize = require("sequelize");
const connectMySQL = new Sequelize(
  "hackathon06_basic", // Tên Database
  "tranpanhminh", // Tên username
  "1234567890", // Tên Password
  {
    host: "localhost",
    dialect: "mysql",
  }
);
module.exports = connectMySQL;
