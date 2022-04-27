const mysql = require("mysql2");
class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
    this.connection.connect(function (err) {
      if (err) {
        console.log("Error connecting to Database", err);
        return;
      }
      console.log("Connection established");
    });
  }
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}
module.exports = new Database({
  host: process.env.HOST,
  user: process.env.USER,
  password: "",
  port: process.env.PORT,
  database: process.env.DB,
});
