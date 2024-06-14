const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
    const { fullName, lastName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your-email@gmail.com", // Вашият Gmail акаунт
            pass: "your-email-password",  // Вашата парола или App Password
        },
    });

    const mailOptions = {
        from: email,
        to: "dimityr_86@mail.bg",
        subject: "New Contact Us Message",
        text: `Full Name: ${fullName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send("Email sent successfully!");
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
