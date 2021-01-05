const express = require("express");

const { onlyAuthenticatedUser } = require("../controllers/users");

const router = express.Router();

const {
  createProductCategory,
  getProductCategories,
} = require("../controllers/productCategories");

router.get("", getProductCategories);

router.post("", onlyAuthenticatedUser, createProductCategory);

module.exports = router;
