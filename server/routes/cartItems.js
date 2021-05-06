const { Router } = require("express");

const router = Router();

const {
  addToCart,
  getCartItems,
  clearCart,
} = require("../controllers/cartItems");

const { onlyAuthenticatedUser } = require("../controllers/users");

router.get("/get-cart-items", onlyAuthenticatedUser, getCartItems);
router.post("/:productId/add-to-cart", onlyAuthenticatedUser, addToCart);
router.delete("/clear-cart", onlyAuthenticatedUser, clearCart);

module.exports = router;
