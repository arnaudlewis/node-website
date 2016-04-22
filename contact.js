var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
exports.contact = function(req, res){
    res.render('contact', { title: 'Piscmic - Contact', page: 'contact' })
};

//Nodemailer
exports.contactForm = function (req, res) {
  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport(smtpTransport({
      service: 'Gmail',
      auth: {
          user: "ariel.agbodjogbe@gmail.com",
          pass: "GEDA3ZPJa"
      }
  }));
  //Mail options
  mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'arnaud.lewis@gmail.com',
      subject: req.body.subject,
      text: req.body.message
  };
  console.log(mailOpts);
  smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      console.log(error);
      if (error) {
          res.render('contact', { title: 'Prismic - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
          res.render('contact', { title: 'Prismic - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
      }
  });
}
