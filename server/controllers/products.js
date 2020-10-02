const Product = require("../models/product");

exports.getProducts = (req, res) => {
  Product.find({}, (error, foundProducts) => {
    if (error) {
      return Product.sendError(res, {
        status: 422,
        detail: "Cannot retrieve rental data!",
      });
    }

    return res.json(foundProducts);
  });
};

exports.getProductById = (req, res) => {
  const { productId } = req.params;
  Product.findById(productId, (error, foundProductById) => {
    if (error) {
      return Product.sendError(res, {
        status: 422,
        detail: "Cannot find rental with this id",
      });
    }
    return res.json(foundProductById);
  });
};

exports.createProduct = (req, res) => {
  const productData = req.body;

  Product.create(productData, (error, createdProduct) => {
    if (error) {
      return Product.sendError(res, {
        status: 422,
        detail: "Cannot post rental data!",
      });
    }
    res.json({
      message: `Product with id: ${createdProduct._id} was successfully created`,
    });
  });
};
