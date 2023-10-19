const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jswizard430@gmail.com', 
    pass: 'xmwzjzrzmqodfrhb' 
  }
});

module.exports = transporter;
