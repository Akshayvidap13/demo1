const mysql = require("mysql");
require("dotenv").config();

const connect = mysql.createConnection({
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  host: process.env.DB_HOST,
  queueLimit: 0,
  connectTimeout: 100000, // increase the timeout to 60 seconds
  //ssl: require,
  //port: process.env.APP_PORT,
});

// connect.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connect.threadId);
// });

module.exports = connect;
