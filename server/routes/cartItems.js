const { Router } = require("express");

const router = Router();

const { addToCart } = require("../controllers/cartItems");

router.post("/:productId/add-to-cart", addToCart);

module.exports = router;
