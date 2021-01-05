const { users, products, productCategories } = require("./data/index");
const Product = require("../models/product");
const User = require("../models/user");
const ProductCategory = require("../models/productCategory");

class FakeDB {
  deleteData = async () => {
    await Product.deleteMany({});
    await User.deleteMany({});
    await ProductCategory.deleteMany({});
  };

  addData = async () => {
    await Product.create(products);
    await User.create(users);
    await ProductCategory.create(productCategories);
  };

  populate = async () => {
    await this.deleteData();
    await this.addData();
  };
}

const fakeDB = new FakeDB();

module.exports = fakeDB;
