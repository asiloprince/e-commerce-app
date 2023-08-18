const express = require("express");
const User = require("../models/userModel");
const asyncHandler = require("../global/middleware/asyncHandler");
const passwordUtl = require("../global/utils/password.utils");
const generateToken = require("../global/utils/jwt");
const { protect, admin } = require("../global/middleware/authentication");

const router = express.Router();

// login
const authLoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await passwordUtl.matchPassword(password, user.password))) {
    generateToken(res, user._id);

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
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already Exist");
  }

  try {
    hashedPassword = await passwordUtl.hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      generateToken(res, user._id);

      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user Data");
    }
  } catch (error) {
    res.status(500).json({ error: "am error occured" });
  }
});

// logout user
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
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

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/login", authLoginUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

module.exports = router;
