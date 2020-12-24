const express = require("express");

const router = express.Router();

const { login, register, changePassword } = require("../controllers/users");

router.post("/login", login);
router.post("/register", register);

router.put("/password-reset", changePassword);

module.exports = router;
