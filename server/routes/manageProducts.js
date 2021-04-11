const router = require("express").Router();

const { onlyAuthenticatedUser } = require("../controllers/users");
const { getUserProducts } = require("../controllers/manageProducts");

router.get("/my-products/", onlyAuthenticatedUser, getUserProducts);

module.exports = router;
