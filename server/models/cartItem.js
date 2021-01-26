const { Schema, model } = require("mongoose");

const cartItemSchema = new Schema({
  product: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model("CartItem", cartItemSchema);
