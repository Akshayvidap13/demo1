const { verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.headers.authorization;
    if (token) {
      token = token.slice(7);
      secretToken = process.env.SECRETTOKEN;
      verify(token, "ABCTest", (error, decoded) => {
        if (error) {
          res.status(403).json({
            success: 0,
            message: "Invaild Token",
          });
        } else {
          console.log(decoded);
          next();
        }
      });
    } else {
      res.status(403).json({
        success: 0,
        message: "Access Denied, unauthorized user",
      });
    }
  },
};
