const Database = require("./../utils/promisifying");
const db = Database;
const Authservices = require('./../utils/authservices');
exports.register = async(req, res, next) => {
  // const { name, email, password, mobileNo, address } = req.body;
  const temp = await Authservices.signup(req.body);
  console.log(temp);
        res.status(200).json({
        status: "success",
        temp,
      });
  // const sql = `INSERT INTO users (Name, Email, Password, MobileNumber, Address) VALUES ?`;
  // values = [[name, email, password, mobileNo, address]];
  // var data;
  // db.query(sql, [values])
  //   .then((result) => {
  //     var sql1 = "SELECT * FROM users WHERE id = ?";
  //     const values1 = [result.insertId];
  //     console.log(result.insertId, "ashutosh");
  //     return db.query(sql1, [values1]);
  //   })
  //   .then((dt) => {
  //     [data] = dt;
  //     console.log("1 record insert");
  //     res.status(200).json({
  //       status: "success",
  //       data,
  //     });
  //   });
};
