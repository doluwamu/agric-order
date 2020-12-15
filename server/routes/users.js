const express = require("express");
const { onlyAuthenticatedUser } = require("../controllers/users");

const router = express.Router();

const { login, register } = require("../controllers/users");

router.post("/login", onlyAuthenticatedUser, login);
router.post("/register", register);

module.exports = router;
