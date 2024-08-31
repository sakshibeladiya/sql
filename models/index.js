const sequelize = require("../config/db.js");
const User = require("./user.model.js");
const Notebook = require("./profile.model.js");

// // Define relationships if needed
// // For example, if a user has many notebooks
// User.hasMany(Notebook);
// Notebook.belongsTo(User);

(async () => {
  try {
    await sequelize.sync(); // This will create tables

    // await sequelize.sync({ force: true }); // This will create tables
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
