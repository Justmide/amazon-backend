const transporter = require("./transporter");
const dotEnv = require("dotenv");
dotEnv.config;

const sendConfirmedEmail = (email) => {
  const options = {
    sender: "Amazon",
    to: email,
    subject: "Account Verification Successful",
    from: "Amazon",
    html: `
    <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Confirmed</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px; margin: 20px auto; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="text-align: center; padding: 20px 0;">
                <h1 style="color: #007bff;">Account Confirmed</h1>
            </td>
        </tr>
        <tr>
            <td style="text-align: center; padding: 10px 20px;">
                <p style="font-size: 16px; color: #333;">Congratulations! Your account has been successfully confirmed.</p>
                <p style="font-size: 16px; color: #333;">You can now log in and start using our services.</p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center; padding: 20px;">
                <a href="${process.env.client_domain} style="background-color: #007bff; color: #ffffff; padding: 12px 25px; text-decoration: none; font-size: 16px; border-radius: 5px; display: inline-block;">Go to Dashboard</a>
            </td>
        </tr>
        <tr>
            <td style="text-align: center; padding: 20px 0; font-size: 14px; color: #777;">
                <p>If you did not create this account, please ignore this email.</p>
            </td>
        </tr>
    </table>
</body>
</html>

    `,
  };

  transporter.sendMail(options)
};

module.exports = sendConfirmedEmail
