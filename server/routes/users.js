const express = require("express");
const { onlyAuthenticatedUser } = require("../controllers/users");

const router = express.Router();

const {
  login,
  register,
  changePassword,
  deleteAccount,
} = require("../controllers/users");

router.post("/login", login);
router.post("/register", register);

// Reseting Password
// router.post("/password-reset", changePassword);
router.patch("/:userId/password-reset", changePassword);

// Deleting account
router.delete("/:userId/delete-account", onlyAuthenticatedUser, deleteAccount);

module.exports = router;
