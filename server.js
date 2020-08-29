const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    user: "root",

    password: "",

    database: "e-commerce-back-end",
});

connection.connect(function(err) {
  if (err) {
      console.log(err)
      throw err
  };
  console.log("connected as id" + connection.threadId);
});

module.exports = connection;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


