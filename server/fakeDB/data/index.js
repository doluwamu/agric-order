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
    name: "Cow",
    image: "/images/cat",
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
    name: "Goat",
    image: "/images/cat",
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
    name: "Ram",
    image: "/images/cat",
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
