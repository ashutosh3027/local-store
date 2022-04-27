const db = require("./../utils/promisifying");
const { AppError } = require("./../controller/errorController");
exports.createUserDb = async ({ name, email, password, mobileNo, address }) => {
  const sql = `INSERT INTO users (Name, Email, Password, MobileNumber, Address) VALUES ?`;
  var values = [[name, email, password, mobileNo, address]];
  var data;
  await db
    .query(sql, [values])
    .then((result) => {
      var sql1 = "SELECT * FROM users WHERE id = ?";
      const values1 = [result.insertId];
      return db.query(sql1, [values1]);
    })
    .then((dt) => {
      [data] = dt;
      console.log("1 record insert");
    });
    return data;
};
exports.getUserByEmailDb = async (email) => {
  var sql = "SELECT * FROM users WHERE Email=?";
  var values = [[email]];
  var result;
  await db
    .query(sql, [values])
    .then((rows) => {
      result = rows;
    })
    .catch((err) => {
      throw new AppError(err.statusCode, err.message);
    });
  return result;
};
exports.getUserByMobileNoDb = async (mobileNo) => {
  var sql = "SELECT * FROM users WHERE MobileNumber=?";
  var values = [[mobileNo]];
  var result;
  await db
    .query(sql, [values])
    .then((rows) => {
      result = rows;
    })
    .catch((err) => {
      throw new AppError(err.statusCode, err.message);
    });
  return result;
};
