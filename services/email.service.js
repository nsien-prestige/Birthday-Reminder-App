const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendReminderEmail = async (to, name) => {
    const mailOptions = {
        from: `"Birthday Reminder 🎉" <${process.env.EMAIL_USER}>`,
        to,
        subject: 'Happy Birthday 🎂',
        html: `
            <h2>Happy Birthday, ${name}! 🎉</h2>
            <p>Wishing you a day filled with love, joy, and happiness 😘🎂</p>
            <p>Have an amazing year ahead!</p>
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendReminderEmail };
