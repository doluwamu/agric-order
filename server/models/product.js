const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: [50, "Invalid length, maximum is 50 characters"],
    lowercase: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
    minlength: [8, "Invalid length, minimum is 8 characters"],
    maxlength: [150, "Invalid length, maximum is 150 characters"],
  },
  quantityInStock: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.statics.sendError = function (res, config) {
  const { status, detail } = config;
  return res.status(status).send({
    errors: [{ title: "Rental Error!", detail }],
  });
};

module.exports = mongoose.model("Product", productSchema);
