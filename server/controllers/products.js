const products = require("../data/productsData");

exports.getProducts = (req, res) => {
  return res.json(products);
};

exports.getProductById = (req, res) => {
  const { productId } = req.params;
  const product = products.find((p) => p._id === productId);

  res.json(product);
};

exports.createProduct = (req, res) => {
  const productData = req.body;
  products.push(productData);

  res.json({ message: "Product was successfully added" });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((p) => p._id === id);

  products.splice(productIndex, 1);

  res.json({
    message: `Product with id: of ${id} has been successfully deleted`,
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const productToUpdate = req.body;
  const productIndex = products.findIndex((p) => p._id === id);

  products[productIndex].name = productToUpdate.name;
  products[productIndex].price = productToUpdate.price;

  res.json({
    message: `Product with id: of ${id} has been successfully updated`,
  });
};
