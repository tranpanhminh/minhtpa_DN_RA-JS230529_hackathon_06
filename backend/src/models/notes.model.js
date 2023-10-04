const Sequelize = require("../configs/db.config.js");
const { DataTypes } = require("sequelize");
const NotesModel = Sequelize.define(
  "notes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);
NotesModel.sync().then(() => {
  console.log("OK");
});

module.exports = NotesModel;
