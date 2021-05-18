const CartItem = require("../models/cartItem");
const Product = require("../models/product");

exports.addToCart = async (req, res) => {
  const { quantity } = req.query;
  const { productId } = req.params;
  const { user } = res.locals;
  try {
    const foundProduct = await Product.findById(productId).populate(
      "owner",
      "-password"
    );

    if (!foundProduct) {
      return res.sendApiError({
        title: "Unexisting data!",
        detail: `No product with id of ${productId} found!`,
      });
    }
    if (foundProduct.owner.id === user.id) {
      return res.sendApiError({
        title: "Your product!",
        detail: "You cannot add your own product to your cart!",
      });
    }

    const newCartItem = new CartItem({
      product: foundProduct,
      owner: user,
      quantity,
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
      detail: "There is no user!",
    });
  }

  try {
    const cartItem = await CartItem.find({ owner: user });

    res.json(cartItem);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.removeCartItem = async (req, res) => {
  const { id } = req.params;
  const { user } = res.locals;
  try {
    const foundProduct = await CartItem.findById(id).populate(
      "owner",
      "-password"
    );
    if (foundProduct.owner.id !== user.id) {
      return res.sendApiError({
        title: "Invalid user!",
        detail: "This is not your cart!",
      });
    }
    await foundProduct.remove();
    return res.json(foundProduct);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.clearCart = async (req, res) => {
  const { user } = res.locals;
  try {
    const foundItems = await CartItem.find({ owner: user });
    if (foundItems.length === 0) {
      return res.sendApiError({
        title: "Invalid deletion!",
        detail: "There is no product in your cart!",
      });
    }
    await foundItems.forEach((item) => {
      item.remove();
    });
    return res.json(foundItems);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.changeQuantityInCart = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.query;

  try {
    if (!quantity) {
      return res.sendApiError({
        title: "Missing data!",
        detail: "Please provide a quantity!",
      });
    }

    const foundCartItem = await CartItem.findByIdAndUpdate(
      { _id: id },
      { quantity }
    );

    return res.json({ foundCartItem });
  } catch (error) {
    return res.mongoError(error);
  }
};
