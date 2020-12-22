const { Types } = require("mongoose");

const user3Id = Types.ObjectId();
const user1Id = Types.ObjectId();
const user2Id = Types.ObjectId();

exports.users = [
  {
    _id: user1Id,
    username: "test1",
    email: "test1@gmail.com",
    password: "testingtest1",
  },
  {
    _id: user2Id,
    username: "test2",
    email: "test2@gmail.com",
    password: "testingtest2",
  },
  {
    _id: user3Id,
    username: "test3",
    email: "test3@gmail.com",
    password: "testingtest3",
  },
];

exports.products = [
  {
    name: "cow",
    image:
      "data:image/jpeg;base64,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",
    category: "cow",
    price: 150000,
    ratings: 4.5,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, modi, quo",
    quantityInStock: 7,
    owner: user1Id,
    available: true,
  },
  {
    name: "goat",
    image:
      "data:image/jpeg;base64,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",
    category: "goat",
    price: 30000,
    ratings: 4.0,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, modi, quo",
    quantityInStock: 7,
    owner: user2Id,
    available: true,
  },
  {
    name: "ram",
    image: "https://i.ytimg.com/vi/BFMpZB88hho/maxresdefault.jpg",
    category: "sheep",
    price: 45000,
    ratings: 4.2,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, modi, quo",
    quantityInStock: 7,
    owner: user3Id,
    available: true,
  },
];