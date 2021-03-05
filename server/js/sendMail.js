const nodemailer = require('nodemailer');
const config_mail = require('../config/mail.json')
const validator = require('validator')
const getTime = require('./timeLocal')

function validator_contact(mail, objet, message) {
    msg_error = "";
    if (validator.isEmpty(mail))
        msg_error = "Email vide"
    else if (!validator.isEmail(mail))
        msg_error = "Email Erreur"
    else if (validator.isEmpty(objet))
        msg_error = "Objet vide"
    else if (validator.isEmpty(message))
        msg_error = "Message vide"
    return msg_error;
}

function outputToSender(mail, objet, message) {
    return `
          <p>Bonjour,</p>
          <p>J'ai bien reçu votre message ${getTime.getLocaleTimeString()} et vous en remercie. Vous recevrez un copie dans ce email.</p>
          <p><strong>Objet: </strong>${objet}</p>
          <p><strong>Message: </strong>${message}</p>
          <p>Cordialement,</p>
          <p>Site de Shuyuan</p>
          `;
}

function outputToDestinator(mail, objet, message) {
    return `
          <p>Vous avez reçu un nouveau contact request ${getTime.getLocaleTimeString()}</p>
          <h3>Email</h3>
          <p>${mail}</p>
          <h3>Objet</h3>
          <p>${objet}</p>
          <h3>Message</h3>
          <p>${message}</p>
          `;
}

function mailOptionsToSender(mail, objet, message) {
    return {
        from: config_mail['from'], // sender address
        to: mail, // list of receivers
        subject: config_mail['titleToSender'], // Subject line
        html: outputToSender(mail, objet, message) // html body
    }
}

function mailOptionsToDestinator(mail, objet, message) {
    return {
        from: config_mail['from'], // sender address
        to: config_mail['to'], // list of receivers
        subject: config_mail['titleToDestinator'], // Subject line
        html: outputToDestinator(mail, objet, message) // html body
    }
}

function getTransporter() {
    return nodemailer.createTransport({
        host: config_mail['host'],
        port: config_mail['port'],
        secure: config_mail['secure'], // true for 465, false for other ports
        auth: {
            user: config_mail['user'], // generated ethereal user
            pass: config_mail['pass'] // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });
}

exports.sendMail = function(mail, objet, message, isToSender) {
    console.log('message : ', message);

        return new Promise(function(resolve, reject) {
            let transporter = getTransporter();
            let mailOptions = isToSender ? mailOptionsToSender(mail, objet, message) : mailOptionsToDestinator(mail, objet, message);
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    if (index == 0) {
                        reject('ERREUR : Email saisie n\'est pas correct')
                        return console.log(error);
                    } else {
                        reject('ERREUR : Email has not been sent, ressayez plus tard svp')
                        return console.log(error);
                    }
                } else {
                    resolve('OK');
                }
                console.log('-----------------');
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                console.log('-----------------');

            });

        })
    }
    /* exports.sendContact = function(req) {
        return new Promise(function(resolve, reject) {
            if (validator_contact(req.body.mail, req.body.objet, req.body.message)) {
                reject(msg_error)
            } else {
                // create reusable transporter object using the default SMTP transport
                let transporter = getTransporter();

                // setup email data with unicode symbols
                let listMailOptions = [mailOptionsToSender(req.body.mail, req.body.objet, req.body.message), mailOptionsToDestinator(req.body.mail, req.body.objet, req.body.message)]

                listMailOptions.forEach(function(mailOptions, index) {

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            if (index == 0) {
                                reject('ERREUR : Email saisie n\'est pas correct')
                                return console.log(error);
                            } else {
                                reject('ERREUR : Email has not been sent, ressayez plus tard svp')
                                return console.log(error);
                            }
                        } else {
                            resolve('OK');
                        }
                        console.log('-----------------');
                        console.log('Message sent: %s', info.messageId);
                        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                        console.log('-----------------');
                    });
                })
                next();
            }
        })
    } */