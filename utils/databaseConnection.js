const mysql = require('mysql2');
// DB connection details;

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: "",
  port: process.env.PORT,
  database: process.env.DB,
});
module.exports=db;
