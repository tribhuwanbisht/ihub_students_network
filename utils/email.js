// const nodemailer = require('nodemailer');

// const sendEmail = async options => {
//   // 1) Create a transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: 'tribhuwanbisht.nita@gmail.com',
//       pass: 'qqjclwrtbxauzciw'
//     }
//   });

//   // 2) Define the email options
//   const mailOptions = {
//     from: 'tribhuwanbisht.nita@gmail.com',
//     to: options.email,
//     subject: 'Welcome to the NITA Student Portal',
//     text: `Thank you for registering in the NITA Student Portal.
//         Your registration has been successfully completed
//         You will get notifications about the events in this registered email`

//   };

//   // 3) Actually send the email
//   await transporter.sendMail(mailOptions);

//   module.exports = sendEmail;
// };

// const nodemailer = require('nodemailer');


// let mailTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'tribhuwanbisht.nita@gmail.com',
//     pass: 'qqjclwrtbxauzciw'
//   }
// });

// let mailDetails = {
//   from: 'tribhuwanbisht.nita@gmail.com',
//   to: 'tanmaybisht2794@gmail.com',
//   subject: 'Welcome to the NITA Student Portal',
//   text: `Thank you for registering in the NITA Student Portal.
//         Your registration has been successfully completed
//         You will get notifications about the events in this registered email`
// };

// mailTransporter.sendMail(mailDetails, function (err, data) {
//   if (err) {
//     console.log('Error Occurs', err);
//   } else {
//     console.log('Email sent successfully');
//   }
// });
