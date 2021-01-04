const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  const { category } = req.query;
  const query = category ? { category } : {};
  try {
    const product = await Product.find(query);
    return res.json(product);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.getProductById = async (req, res) => {
  const { productId } = req.params;

  Product.findById(productId)
    .populate("owner", "-password")
    .exec((error, foundProductById) => {
      if (error) {
        return res.mongoError(error);
      }
      return res.json(foundProductById);
    });
};

exports.createProduct = async (req, res) => {
  const productData = req.body;
  productData.owner = res.locals.user;

  try {
    const createdProduct = await Product.create(productData);
    return res.json({ createdProduct });
  } catch (error) {
    return res.mongoError(error);
  }
};
