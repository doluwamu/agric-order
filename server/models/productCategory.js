const { model, Schema } = require("mongoose");

// const Schema = mongoose.Schema

const productCategorySchema = new Schema({
  categoryName: {
    type: String,
    required: ["Category name is a required field"],
    lowercase: true,
  },
  categoryType: {
    type: String,
    required: ["Category type is a required field"],
    lowercase: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("ProductCategory", productCategorySchema);
