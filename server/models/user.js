const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
    unique: true,
    lowercase: true,
    required: ["Email is required"],
    match: EMAIL_PATTERN,
  },
  resetToken: String,
  expireToken: Date,
  password: {
    type: String,
    required: ["Password is required"],
    minlength: [8, "Minimum must be 8 characters"],
  },
  acceptedPrivacyTerms: { type: Boolean, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// userSchema.methods.hasSamePassword = function (providedPassword) {
//   return bcrypt.compareSync(providedPassword, this.password);
// };
userSchema.methods.hasSamePassword = function (providedPassword) {
  return bcrypt.compareSync(providedPassword, this.password);
};

// userSchema.pre("save", function (next) {
//   const user = this;

//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       user.password = hash;
//       next();
//     });
//   });
// });

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", userSchema);
