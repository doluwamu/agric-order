const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: ["Name is a required field"],
    maxlength: [50, "Invalid length, maximum is 50 characters"],
    lowercase: true,
  },
  price: {
    type: Number,
    required: ["Price is a required field"],
  },
  quantity: {
    type: Number,
    required: ["Quantity in stock is a required field"],
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
