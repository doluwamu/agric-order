const { Types } = require("mongoose");

const user3Id = Types.ObjectId();
const user1Id = Types.ObjectId();
const user2Id = Types.ObjectId();

exports.users = [
  {
    _id: user1Id,
    username: "test 1",
    email: "test1@gmail.com",
    password: "testingtest1",
    acceptedPrivacyTerms: true,
  },
  {
    _id: user2Id,
    username: "test 2",
    email: "test2@gmail.com",
    password: "testingtest2",
    acceptedPrivacyTerms: true,
  },
  {
    _id: user3Id,
    username: "test 3",
    email: "test3@gmail.com",
    password: "testingtest3",
    acceptedPrivacyTerms: true,
  },
];

exports.products = [
  {
    name: "cow",
    image:
      "https://images.unsplash.com/photo-1569400355630-c7ff53413b21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "cow",
    price: 150000,
    likes: 450,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, modi, quo",
    quantityInStock: 7,
    owner: user1Id,
    available: true,
  },
  {
    name: "goat",
    image:
      "https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "goat",
    price: 30000,
    likes: 844,
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
    likes: 200,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, modi, quo",
    quantityInStock: 7,
    owner: user3Id,
    available: true,
  },
];

exports.productCategories = [
  {
    categoryName: "cow",
    categoryType: "animal",
  },
  {
    categoryName: "pig",
    categoryType: "animal",
  },
  {
    categoryName: "goat",
    categoryType: "animal",
  },
  {
    categoryName: "Sheep",
    categoryType: "animal",
  },
];
