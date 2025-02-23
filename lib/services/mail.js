'use strict';

const nodemailer = require('nodemailer');
const { Service } = require('@hapipal/schmervice');

module.exports = class MailService extends Service {

    constructor() {
        super();
        
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }

    async sendWelcomeEmail(user) {
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: user.email,
            subject: 'Bienvenue sur notre application !',
            html: `
                <h1>Bienvenue ${user.firstName} !</h1>
                <p>Nous sommes ravis de vous compter parmi nos utilisateurs.</p>
                <p>Vous pouvez désormais vous connecter à votre compte et profiter de tous nos services.</p>
                <p>Cordialement,<br>Sofian</p>
            `
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Email sent: %s', info.messageId);
            // Pour Ethereal, afficher l'URL de prévisualisation
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            return info;
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
};
