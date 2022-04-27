const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: `./config.env` });
const app = require(`./app.js`);
const db = require("./utils/databaseConnection");
// console.log(db);
db.connect(function (err) {
  if (err) {
    console.log("Error connecting to Database", err);
    return;
  }
  console.log("Connection established");
});

// port
const PORT = process.env.SERVER_PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
