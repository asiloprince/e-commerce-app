const express = require("express");
const User = require("../models/userModel");
const asyncHandler = require("../global/middleware/asyncHandler");
const matchPassword = require("../global/utils/password.utils");

const router = express.Router();

// login
const authLoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await matchPassword(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
// register user
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});
// logout user
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout");
});
// user profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});
// get user id
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});
// getUsers
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});
// update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update profile");
});
//  update user
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});
//  delete user
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authLoginUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

module.exports = router;
