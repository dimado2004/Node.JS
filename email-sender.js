var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'didi130504@gmail.com',
    pass: 'DIDI2004'
  }
});

var mailOptions = {
  from: 'didi130504@gmail.com',
  to: 'yaodidi75@gmail',
  subject: 'Inscription',
  text: 'Es-tu partant pour l"inscription!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});