const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sequilizeTrial", "root", "sakshiRoot", {
  host: "localhost",
  dialect: "mysql",
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("unable to connect to the database", error);
  }
})();

module.exports = sequelize;

