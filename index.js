require('dotenv').config();

// Note that you have to change your security settings in your email provider to be able to do this. 'cuz this is a 3rd party app, so no provider will let you to access your account without your permission

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  }
});

var mailOptions = {
  from: process.env.USER_EMAIL,
  to: 'to-his@email.com',
  subject: 'Subject',
  html: `<p>html template</p>`,
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
