const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler");
const User = require("../../models/userModel");

// protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token)
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await User.findById(decoded.userId).select("-password");
    } catch (error) {
      res.status(401);
      console.log(error);
      throw new Error("Not authorize, token failed");
    }
  else {
    res.status(401);
    throw new Error("Not authorize user, no token");
  }
});

// Admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorize as admin");
  }
};

module.exports = { protect, admin };
