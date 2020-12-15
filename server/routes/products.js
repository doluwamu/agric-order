const express = require("express");

const { onlyAuthenticatedUser } = require("../controllers/users");

const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
} = require("../controllers/products");

router.get("", getProducts);

router.get("/:productId", getProductById);

router.post("", onlyAuthenticatedUser, createProduct);

module.exports = router;
