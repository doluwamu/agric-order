const express = require("express");

const { onlyAuthenticatedUser } = require("../controllers/users");

const router = express.Router();

const {
  createProductCategory,
  getProductCategories,
} = require("../controllers/productCategories");

router.get("/product", getProductCategories);

router.post("/product-category", onlyAuthenticatedUser, createProductCategory);

module.exports = router;
