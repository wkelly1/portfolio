import { minLength, minMaxLength, Valigator } from "valigators";
const { EOL } = require("os");

const nodemailer = require("nodemailer");

async function sendEmail(subject, plain, html) {
  console.log(process.env.user, process.env.pass);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.user, // generated ethereal user
      pass: process.env.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"will-kelly.co.uk (Portfolio website)" <contact@will-kelly.co.uk>', // sender address
    to: "contact@will-kelly.co.uk", // list of receivers
    subject: subject, // Subject line
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

      const message = `
        Contact message sent from: Portfolio Website (will-kelly.co.uk)${EOL}
        ${EOL}
        Senders email: ${body.data.email}${EOL}
        Senders name: ${body.data.name}${EOL}
        Senders message: ${body.data.message}${EOL}
        Requested cv: ${body.data.cv}${EOL}
        Date sent: ${new Date()}
      `;
      console.log(message);
      const htmlMsg = `
      <p>
      <h1>Contact message sent from: Portfolio Website (will-kelly.co.uk)</h1><br>
      <br>
      <b>Senders email:</b> ${body.data.email}<br>
      <b>Senders name:</b> ${body.data.name}<br>
      <b>Senders message:</b> ${body.data.message}<br>
      <b>Requested cv:</b> ${body.data.cv}<br>
      <b>Date sent:</b> ${new Date()}
      </p>
    `;

      try {
        if (valid) {
          sendEmail(
            "New contact us message: (Portfolio website)",
            message,
            htmlMsg
          )
            .then((value) => res.status(200).json({ message: "Message sent" }))
            .catch((error) =>
              res.status(400).json({ message: "Something went wrong" })
            );
        } else {
          res.status(400).json({ message: "Invalid data" });
        }
      } catch (ignore) {}
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

function parseBody(body) {
  return JSON.parse(body);
}
