const { Router } = require("express");

const router = Router();

const { addToCart, getCartItems } = require("../controllers/cartItems");

const { onlyAuthenticatedUser } = require("../controllers/users");

router.get("/get-cart-items", onlyAuthenticatedUser, getCartItems);
router.post("/:productId/add-to-cart", onlyAuthenticatedUser, addToCart);

module.exports = router;
