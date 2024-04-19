
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'your_email@gmail.com', 
    pass: 'your_password' 
  }
});


const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'your_email@gmail.com',
  subject: 'Test Email', 
  text: 'This is a test email sent using Node.js and nodemailer!' 
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error('Error occurred while sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
