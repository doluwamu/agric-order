const express = require("express");

const router = express.Router();

const {
  login,
  register,
  changePassword,
  getUsers,
  changePasswordVerification,
  deleteAccount,
  onlyAuthenticatedUser,
  getUserByEmail,
} = require("../controllers/users");

router.post("/get-user", getUserByEmail);
router.get("", getUsers);

router.post("/login", login);
router.post("/register", register);

// Reseting Password
router.post("/password-reset-verification", changePasswordVerification);
router.post("/:userId/password-reset", changePassword);

// Deleting account
router.delete("/:userId/delete-account", onlyAuthenticatedUser, deleteAccount);

module.exports = router;
