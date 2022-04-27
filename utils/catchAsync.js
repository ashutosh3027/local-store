module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
        throw err;
    //   next(err);
    });
  };
};