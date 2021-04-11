const Products = require("../models/product");

exports.getUserProducts = async (req, res) => {
  const { user } = res.locals;
  try {
    const foundProducts = await Products.find({ owner: user });
    return res.json(foundProducts);
  } catch (error) {
    return res.mongoError(error);
  }
};
