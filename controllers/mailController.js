const Admin = require('../models/admin'); 
const nodemailer = require('nodemailer'); 

const getAdminData = async (req, res) => {
  try {
    const adminData = await Admin.findAll();
    res.json(adminData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const sendEmail = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.APP_EMAIL_ADDRESS,
      pass: process.env.APP_EMAIL_PASSWORD
    }
  });

  
  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            
          }
          .container {
            padding: 20px;
            background-color: black;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          #test{
            color:white;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 id="test">Hello there!</h1>
          <p id="test">This is a test .</p>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.APP_EMAIL_ADDRESS,
    to: 'rammachsedik@gmail.com',
    subject: 'Test Email',
    html: htmlContent
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send('Error sending email: ' + error);
    } else {
      res.send('Email sent: ' + info.response);
    }
  });
};


module.exports = {
  getAdminData,
  sendEmail
};
