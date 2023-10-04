// const Sequelize = require("sequelize");
// const connectMySQL = new Sequelize(
//   "hackathon06_advanced", // Tên Database
//   "tranpanhminh", // Tên username
//   "1234567890", // Tên Password
//   {
//     host: "localhost",
//     dialect: "mysql",
//   }
// );
// module.exports = connectMySQL;

// get the client
const mysql = require("mysql2");
require("dotenv").config();
// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "",
  port: process.env.DB_PORT || "",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;

