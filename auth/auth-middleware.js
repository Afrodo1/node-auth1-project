module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
      next();
    } else {
      res
        .status(401)
        .json("Looks like you need to login first to access this information");
    }
  };