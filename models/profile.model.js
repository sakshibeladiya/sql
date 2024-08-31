const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("./user.model.js");

const Profile = sequelize.define("Profile", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // 'Actors' would also work
      key: 'id',
    },
  },
  // Add more fields as needed
});

module.exports = Profile;
