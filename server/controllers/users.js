const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/dev");

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.sendApiError({
      title: "Missing data!",
      detail: "Email or pasword is missing",
    });
  }

  User.findOne({ email }, (error, foundUser) => {
    if (error) {
      return res.mongoError(error);
    }

    if (!foundUser) {
      return res.sendApiError({
        title: "Invalid data!",
        detail: "User with this email doesn't exist",
      });
    }

    if (foundUser.hasSamePassword(password)) {
      const token = jwt.sign(
        {
          email,
          password,
        },
        JWT_SECRET,
        { expiresIn: "2h" }
      );
      return res.json({ token });
    } else {
      return res.sendApiError({
        title: "Invalid data",
        detail: "Provided password is wrong",
      });
    }
  });
};

exports.register = async (req, res) => {
  const { username, email, password, confirmationPassword } = req.body;

  if (!username) {
    return res.sendApiError({
      title: "Missing field",
      detail: "Username is missing",
    });
  }
  if (!email || !password) {
    return res.sendApiError({
      title: "Missing field",
      detail: "Email or password is missing",
    });
  }

  if (password !== confirmationPassword) {
    return res.sendApiError({
      title: "Data mismatch",
      detail: "Password must be the same as confirmation password",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.sendApiError({
        title: "Existing user",
        detail: "User with provided email already exists",
      });
    }

    const user = await new User({ username, email, password });
    user.save((error) => {
      if (error) {
        return res.mongoError(error);
      }
      return res.json({ status: "registered" });
    });
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.onlyAuthenticatedUser = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.sendApiError({
      title: "Not Authorized!",
      detail: "Please log in to get access",
    });
  }
};
