const CartItem = require("../models/cartItem");
const Product = require("../models/product");

exports.addToCart = async (req, res) => {
  const { productId } = req.params;
  try {
    const foundProduct = await Product.findById(productId);
    if (!foundProduct) {
      return res.sendApiError({
        title: "Unexisting data!",
        detail: `No product with id of ${productId} found!`,
      });
    }

    const newCartItem = new CartItem({
      product: foundProduct,
    });

    try {
      const cartItem = await newCartItem.save();
      if (!cartItem) {
        return res.sendApiError({
          title: "Error in creating!",
          detail: "Unable to create cart item",
        });
      }
      return res.json(cartItem);
    } catch (error) {
      return res.mongoError(error);
    }
  } catch (error) {
    return res.mongoError(error);
  }
};
