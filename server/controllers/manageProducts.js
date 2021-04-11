const Product = require("../models/product");

exports.getUserProducts = async (req, res) => {
  const { user } = res.locals;
  try {
    const foundProducts = await Product.find({ owner: user });
    return res.json(foundProducts);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.deleteUserProduct = async (req, res) => {
  const { productId } = req.params;
  const { user } = res.locals;

  try {
    const foundProduct = await Product.findById(productId).populate(
      "owner",
      "-password"
    );
    if (user.id !== foundProduct.owner.id) {
      return res.sendApiError({
        title: "Invalid user!",
        detail: "You are not owner of this product!",
      });
    }
    await foundProduct.remove();
    return res.json({ id: productId });
  } catch (error) {
    return res.mongoError(error);
  }
};
