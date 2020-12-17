const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: ["Name is a required field"],
    maxlength: [50, "Invalid length, maximum is 50 characters"],
    lowercase: true,
  },
  image: {
    type: String,
    required: ["Image is a required field"],
  },
  category: {
    type: String,
    required: ["Category is a required field"],
  },
  price: {
    type: Number,
    required: ["Price is a required field"],
  },
  ratings: {
    type: Number,
    required: ["Ratings is a required field"],
  },
  details: {
    type: String,
    required: ["Details is a required field"],
    minlength: [8, "Invalid length, minimum is 8 characters"],
    maxlength: [150, "Invalid length, maximum is 150 characters"],
  },
  quantityInStock: {
    type: Number,
    required: ["Quantity in stock is a required field"],
  },
  available: {
    type: Boolean,
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
