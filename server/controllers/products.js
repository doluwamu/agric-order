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

exports.getProductById = (req, res) => {
  const { productId } = req.params;
  Product.findById(productId, (error, foundProductById) => {
    if (error) {
      return res.mongoError(error);
    }
    return res.json(foundProductById);
  });
};

exports.createProduct = (req, res) => {
  const productData = req.body;

  Product.create(productData, (error, createdProduct) => {
    if (error) {
      return res.mongoError(error);
    }
    res.json({
      message: `Product with id: ${createdProduct._id} was successfully created`,
    });
  });
};
