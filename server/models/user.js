const mongoose = require("mongoose");

const { Schema } = mongoose;
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new Schema({
  username: {
    type: String,
    required: ["Username is required"],
    minlength: [4, "Minimum must be 4 characters"],
  },
  email: {
    type: String,
    required: ["Email is required"],
    match: EMAIL_PATTERN,
  },
  password: {
    type: String,
    required: ["Password is required"],
    minlength: [8, "Minimum must be 8 characters"],
  },
});

module.exports = mongoose.model("User", userSchema);
