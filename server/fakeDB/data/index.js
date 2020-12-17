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
      "https://www.google.com/imgres?imgurl=http%3A%2F%2Fs3-wp-lyleprintingandp.netdna-ssl.com%2Fwp-content%2Fuploads%2F2018%2F01%2F09060054%2Fcow-354428_1280.jpg&imgrefurl=https%3A%2F%2Fwww.farmanddairy.com%2Ftop-stories%2Fhow-to-determine-when-a-cow-is-in-heat%2F464746.html&tbnid=PyIx9TqmM3IGAM&vet=12ahUKEwipzIzi6dXtAhXT_4UKHWezAQ0QMygCegUIARDRAQ..i&docid=Fdo_BS4oFDoRzM&w=1280&h=982&q=cow&ved=2ahUKEwipzIzi6dXtAhXT_4UKHWezAQ0QMygCegUIARDRAQ",
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
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-a.william-reed.com%2Fvar%2Fwrbm_gb_food_pharma%2Fstorage%2Fimages%2Fpublications%2Ffood-beverage-nutrition%2Ffoodnavigator-asia.com%2Fheadlines%2Fmarkets%2Fgetting-the-goat-australia-struggling-to-meet-soaring-demand-for-goat-meat%2F9022285-1-eng-GB%2FGetting-the-goat-Australia-struggling-to-meet-soaring-demand-for-goat-meat_wrbm_large.jpg&imgrefurl=https%3A%2F%2Fwww.foodnavigator-asia.com%2FArticle%2F2019%2F01%2F21%2FGetting-the-goat-Australia-struggling-to-meet-soaring-demand-for-goat-meat&tbnid=9a5W-c0dKLJH-M&vet=12ahUKEwjS88316dXtAhULHBoKHTHaDhcQMygNegUIARDrAQ..i&docid=KDlbUJKGR3qnlM&w=749&h=530&q=goat&ved=2ahUKEwjS88316dXtAhULHBoKHTHaDhcQMygNegUIARDrAQ",
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
