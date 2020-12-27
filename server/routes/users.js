const express = require("express");

const router = express.Router();

const { login, register, changePassword } = require("../controllers/users");

router.post("/login", login);
router.post("/register", register);

// router.patch("", changePassword);
router.post("/password-reset", changePassword);

module.exports = router;
