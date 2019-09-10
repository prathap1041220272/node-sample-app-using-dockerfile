// 'use strict'
// // const express = require('express');
// var nodemailer = require('nodemailer');
// // const app = express();
// // const port = process.env.PORT || 4569;



// var transporter = nodemailer.createTransport({
//   host : 'smtp.gmail.com',
//   port : 465,
//   // service: 'gmail',
//   secure: true,
//   auth: {
//     user: 'sivaprathap.konduru@gmail.com',
//     pass: 'siva4568'
//   }
// });

// var mailOptions = {
//   from: 'sivaprathap.konduru@gmail.com',
//   to: 'prathapsiva2456@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!',
//   html: '<b>hi</b>'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
//   transporter.close();
// });

// // app.listen(port,()=>{
// // 	console.log(`server is listening on port ${port}`)
// // })


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'sivaprathap@gmail.com',
        pass: 'xxxxx'
    }
});

var mailOptions = {
    from: 'sivaprathap.konduru@gmail.com',
    to: 'prathap456@gmail.com, insearch@gmail.com',
    subject: 'Hello',
    text: 'Hello world',
    html: '<b>Hello world</b>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    }
    transporter.close();
});
