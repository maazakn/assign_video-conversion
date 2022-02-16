const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    try {
    token = req.headers.authorization
      const decoded = await jwt.verify(token, "abc123");
      req.user = await User.find({ id: decoded._id });
      next();
    } catch (error) {
      res.send({
        status: 401,
        message: "Not authorized invalid token",
      });
    }
  }
  if (!token) {
    res.send({
      status: 500,
      message: "Not authorized no token",
    });
  }
};
module.exports = protect;
