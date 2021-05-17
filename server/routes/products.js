const express = require("express");

const { onlyAuthenticatedUser } = require("../controllers/users");

const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
  addLike,
} = require("../controllers/products");

router.get("", getProducts);

router.get("/:productId", getProductById);

router.post("", onlyAuthenticatedUser, createProduct);

router.post("/:id/add-like", addLike);

module.exports = router;
