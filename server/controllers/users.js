const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/dev");
const bcrypt = require("bcryptjs");
// const { sendVerifyPasswordMail } = require("../services/mailService");
// const crypto = require("crypto");
// const nodemailer = require("nodemailer");
// const sendgridTransport = require("nodemailer-sendgrid-transport");

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key: SENDGRID_API,
//     },
//   })
// );

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      return res.json({ users });
    }
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.getUserByEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.sendApiError({
      title: "Missing data!",
      detail: "Email is missing!",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.sendApiError({
        title: "Invalid email!",
        detail: "User with this email doesn't exist",
      });
    }
    if (user) {
      const token = jwt.sign(
        {
          userId: user.id,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      // return res.json(token);
      return res.json(jwt.decode(token).userId);
    }
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      return res.json({ users });
    }
  } catch (error) {
    return res.mongoError(error);
  }
};

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
          username: foundUser.username,
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
  const {
    username,
    email,
    password,
    passwordConfirmation,
    acceptedPrivacyTerms,
  } = req.body;

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

  if (!acceptedPrivacyTerms) {
    return res.sendApiError({
      title: "Missing field!",
      detail: "Accept privacy terms to proceed!",
    });
  }

  if (password !== passwordConfirmation) {
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

    const user = await new User({
      username,
      email,
      password,
      acceptedPrivacyTerms,
    });

    try {
      const savedUser = user.save();
      if (savedUser) {
        return res.json({ status: "registered" });
      }
    } catch (error) {
      return res.mongoError(error);
    }
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const { newPassword } = req.body;
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(newPassword, salt);
    const user = await User.findByIdAndUpdate({ _id: userId }, { password });
    return res.json({ user });
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const { userId } = req.params;
    const { user } = res.locals;
    const { email } = req.body;
    const accountOwner = await User.findById(userId);
    if (!user || !accountOwner) {
      return res.sendApiError({
        title: "Invalid data!",
        detail: "User does not exist!",
      });
    }

    if (user.id !== accountOwner.id) {
      return res.sendApiError({
        title: "Invalid user!",
        detail: "You are not the owner of this account!",
      });
    }

    if (!email) {
      return res.sendApiError({
        title: "Missing data!",
        detail: "Please provide an email address!",
      });
    }

    if (user.email !== email || accountOwner.email !== email) {
      return res.sendApiError({
        title: "Invalid data!",
        detail:
          "Provided email address does not match the account requested to be deleted!",
      });
    }

    await user.remove();

    return res.json({ message: "This account has succefully been deleted!" });
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
