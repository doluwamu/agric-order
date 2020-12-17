const { users, products } = require("./data/index");
const Product = require("../models/product");
const User = require("../models/user");

class FakeDB {
  deleteData = async () => {
    await Product.deleteMany({});
    await User.deleteMany({});
  };

  addData = async () => {
    await Product.create(products);
    await User.create(users);
  };

  populate = async () => {
    await this.deleteData();
    await this.addData();
  };
}

const fakeDB = new FakeDB();

module.exports = fakeDB;
