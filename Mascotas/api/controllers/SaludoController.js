/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var nodemailer = require('nodemailer');

/* create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
module.exports = {
	hola:function(req,res){
       
        if(req.method=='GET')
            {
                res.send('Hola get')
            }
        
          if(req.method=='POST')
            {
                res.send('Hola post')
            }
        else{
             res.send('Hola todos')
        }
        res.json({
            nombre:'jose',
            apellido:'par'
        });
    },
    	QueTal:function(req,res){
        res.send('Que tal');
    }
};
*/
