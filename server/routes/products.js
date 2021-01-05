const express = require("express");

const { onlyAuthenticatedUser } = require("../controllers/users");

const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
} = require("../controllers/products");
const { createProductCategory } = require("../controllers/productCategories");

router.get("", getProducts);

router.get("/:productId", getProductById);

router.post("", onlyAuthenticatedUser, createProduct);

router.post("/product", onlyAuthenticatedUser, createProductCategory);

module.exports = router;
