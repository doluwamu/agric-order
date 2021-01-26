const { Schema, model } = require("mongoose");

const cartItemSchema = new Schema({
  product: { type: Object, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model("CartItem", cartItemSchema);
