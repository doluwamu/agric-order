const router = require("express").Router();

const { onlyAuthenticatedUser } = require("../controllers/users");
const {
  getUserProducts,
  deleteUserProduct,
} = require("../controllers/manageProducts");

router.delete(
  "/delete-product/:productId",
  onlyAuthenticatedUser,
  deleteUserProduct
);
router.get("/my-products", onlyAuthenticatedUser, getUserProducts);

module.exports = router;
