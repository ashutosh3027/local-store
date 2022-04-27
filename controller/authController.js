const db = require("./../utils/databaseConnection");
exports.register = (req, res, next) => {
  const { name, email, password, mobileNo, address } = req.body;
  const sql = `INSERT INTO users (Name, Email, Password, MobileNumber, Address) VALUES ?`;
  values = [[name, email, password, mobileNo, address]];
  var data=[];
  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    var sql1 = "SELECT * FROM users WHERE id = ?";
    const values1 = [result.insertId];
    console.log(result.insertId, 'ashutosh')
    db.query(sql1, [values1], function (err1, data1, fileds) {

      if (err1) throw err1;
      console.log(data1)
      data.push(data1);
      console.log(data);
      console.log("1 record inserted");
      res.status(200).json({
        status: "success",
        data,
      });
    });
  });
};
