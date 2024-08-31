const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const bcrypt = require("bcryptjs");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
    field: "NAME",
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "surname",
  },
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.name} ${this.lastName}`;
    },
    set(value) {
      throw new Error("Do not try to set the `fullName` value!");
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hashedPassword = bcrypt.hashSync(value, 10);
      this.setDataValue("password", hashedPassword);
    },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 18,
      max: 99,
      notEmpty: false,
    },
  },
  email: DataTypes.STRING,
});

module.exports = User;
