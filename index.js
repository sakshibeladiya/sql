require("dotenv").config();

const express = require("express");
const app = express();
require("./models");
const routes = require("./route.js");
require("./assosiation.js");

app.use(express.json());
app.use("/", routes);
app.use(function (req, res, next) {
  console.log(req.path);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
