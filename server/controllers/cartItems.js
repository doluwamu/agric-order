const CartItem = require("../models/cartItem");
const Product = require("../models/product");

exports.addToCart = async (req, res) => {
  const { productId } = req.params;
  const { user } = res.locals;
  try {
    const foundProduct = await Product.findById(productId).populate("owner");
    if (!foundProduct) {
      return res.sendApiError({
        title: "Unexisting data!",
        detail: `No product with id of ${productId} found!`,
      });
    }

    const newCartItem = new CartItem({
      product: foundProduct,
      owner: user,
    });

    try {
      const cartItem = await newCartItem.save();
      if (!cartItem) {
        return res.sendApiError({
          title: "Error in creating!",
          detail: "Unable to create cart item",
        });
      }
      return res.json({ cartItem });
    } catch (error) {
      return res.mongoError(error);
    }
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.getCartItems = async (req, res) => {
  const { user } = res.locals;

  if (!user) {
    return res.sendApiError({
      title: "Missing Data!",
      detail: "There is no user",
    });
  }

  try {
    const cartItem = await CartItem.find({ owner: user });

    res.json(cartItem);
  } catch (error) {
    return res.mongoError(error);
  }
};
