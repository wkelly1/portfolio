import { minLength, minMaxLength, Valigator } from "valigators";

const nodemailer = require("nodemailer");

async function sendEmail(to, plain, html) {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: plain,
    html: html,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default (req, res) => {
  const validate = new Valigator();

  let shape = {
    email: {
      type: "email",
    },
    name: {
      type: "text",
      validators: [minMaxLength(1, 100)],
    },
    message: {
      type: "text",
      validators: [minMaxLength(1, 512)],
    },
    cv: { type: "boolean" },
  };

  const { method } = req;

  switch (method) {
    case "POST":
      let body = parseBody(req.body);
      let valid = validate.validate(body.data, shape);

      //sendEmail(email, message, message);
      if (valid) {
        res.status(200).json({ message: "Message sent" });
      } else {
        res.status(400).json({ message: "Invalid data" });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

function parseBody(body) {
  return JSON.parse(body);
}
