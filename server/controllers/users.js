const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/dev");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.sendApiError({
      title: "Missing data!",
      detail: "Email or pasword is missing",
    });
  }

  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.sendApiError({
        title: "Invalid data!",
        detail: "User with this email doesn't exist",
      });
    }

    if (foundUser.hasSamePassword(password)) {
      const token = jwt.sign(
        {
          sub: foundUser.id,
          email,
        },
        JWT_SECRET,
        { expiresIn: "2h" }
      );
      return res.json(token);
    } else {
      return res.sendApiError({
        title: "Invalid data",
        detail: "Provided password is wrong",
      });
    }
  } catch (error) {
    return res.mongoError(error);
  }
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

exports.changePassword = async (req, res) => {
  const { userId } = req.params;
  const newPasswords = req.body;
  // const { user } = res.locals;

  try {
    const foundUser = await User.findById(userId);
    if (foundUser) {
      foundUser.set(newPasswords);
      const updatedPassword = await User.findById(userId).populate("password");

      await foundUser.save();
      return res.status(200).send(updatedPassword);
    }
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.onlyAuthenticatedUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return userNotAuthorized(res);
  }

  const decodedToken = parseToken(token);
  if (!decodedToken) {
    return userNotAuthorized(res);
  }

  try {
    const foundUser = await User.findById(decodedToken.sub);
    if (foundUser) {
      res.locals.user = foundUser;
      next();
    } else {
      userNotAuthorized(res);
    }
  } catch (error) {
    return res.mongoError(error);
  }
};

const parseToken = (token) => {
  try {
    // const tkn = token.split(" ")[1];
    return jwt.verify(token.split(" ")[1], JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const userNotAuthorized = (res) => {
  return res.status(401).send({
    errors: [
      { title: "Not Authorized!", detail: "Please log in to get access" },
    ],
  });
};
