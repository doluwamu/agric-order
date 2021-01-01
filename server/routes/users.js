const express = require("express");
const { getUsers } = require("../controllers/test");

const router = express.Router();

const {
  login,
  register,
  changePassword,
  deleteAccount,
  onlyAuthenticatedUser,
} = require("../controllers/users");

router.get("", getUsers);

router.post("/login", login);
router.post("/register", register);

// Reseting Password
// router.post("/password-reset-verify", changePasswordVerification);
router.patch("/:userId/password-reset", changePassword);

// Deleting account
router.delete("/:userId/delete-account", onlyAuthenticatedUser, deleteAccount);

module.exports = router;
