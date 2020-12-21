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
  try {
    const foundProductById = await Product.findById(productId);
    return res.json(foundProductById);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.createProduct = (req, res) => {
  const productData = req.body;
  productData.owner = res.locals.user;

  Product.create(productData, (error, createdProduct) => {
    if (error) {
      return res.mongoError(error);
    }
    return res.json({ createdProduct });
  });
};
