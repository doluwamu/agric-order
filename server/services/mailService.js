const nodemailer = require("nodemailer");
const { GOOGLE_USER, GOOGLE_PASSWORD, DOMAIN } = require("../config/dev");

const sendMail = (message) => {
  return new Promise(async (res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      port: 465,
      auth: {
        user: GOOGLE_USER,
        pass: GOOGLE_PASSWORD,
      },
    });

    try {
      const info = await transporter.sendMail(message);
      if (info) {
        res(info);
      }
    } catch (error) {
      rej(error);
    }
    transporter.close();

    // await transporter.sendMail(message, function (err, info) {
    //   if (err) {
    //     rej(err);
    //   } else {
    //     res(info);
    //   }
    // });
  });
};

exports.sendVerifyPasswordMail = ({ toUser }) => {
  const message = {
    from: GOOGLE_USER, // sender address
    to: toUser.email, // list of receivers
    subject: "Request to reset password",
    html: `
        <h3>Hello: ${toUser.username}</h3>,
        <p>We can see that you have made a request to reset your password and we are here to help you.</p>
        <p>To reset your password, click this <a target="_" href=${DOMAIN}/reset-password>link</a>.</p>
        <p>Sorry for the inconvinience,</p>
        <p>The AgricOrder team.</p>
    `,
  };

  return sendMail(message);
};
