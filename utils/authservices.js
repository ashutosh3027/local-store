const { AppError, handleError } = require("./../controller/errorController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("./validator");
const {
  getUserByEmailDb,
  getUserByMobileNoDb,
  createUserDb,
} = require("./../database/userDB");
class AuthServices {
  async signup(user) {
    try {
      var { name, email, password, mobileNo, address } = user;
      email = email.toLowerCase();
      if (!name || !email || !password || !mobileNo || !address) {
        throw new AppError(401, "All fields are required||");
      }
      if (validator(email, password, mobileNo)) {
        const token = await bcrypt.hash(password, 12);
        console.log(token);
        var userByEmail = await getUserByEmailDb(email);
        var userByMobileNo = await getUserByMobileNoDb(mobileNo);

        if (userByEmail) {
          throw new AppError(401, "Email taken already");
        }

        if (userByMobileNo) {
          throw new AppError(401, "Mobile Number is already registered");
        }
        const newUser = await createUserDb({
          ...user,
          password: token,
        });
        return newUser;
      }
    } catch (error) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}
module.exports = new AuthServices();
