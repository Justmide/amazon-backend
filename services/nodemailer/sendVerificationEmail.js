const transporter = require("./transporter");
const dotEnv = require("dotenv")
dotEnv.config()

const sendVerificationEmail = (name, email, token) => {
  const options = {
    sender: "Amazon",
    to: email,
    subject: "Verify your account",
    from: "Amazon",
    html: `
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Verify Your Account</title>
                </head>
                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 50px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
                        <tr>
                            <td style="padding: 20px;">
                                <h2 style="color: #333;">Verify Your Email Address</h2>
                                <p style="color: #555; font-size: 16px;">Thank you for signing up! Please confirm your email address by clicking the button below.</p>
                                <a href="${process.env.client_domain}/verify/${token}" style="display: inline-block; padding: 12px 20px; font-size: 16px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px; margin-top: 20px;">Verify Account</a>
                                <p style="color: #777; font-size: 14px; margin-top: 20px;">If you didn’t request this, please ignore this email.</p>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        `
  }

  transporter.sendMail(options)
};


module.exports = sendVerificationEmail