import bcryptjs from 'bcryptjs';
import User from "@/models/userModal";
import nodemailer from "nodemailer"

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {

        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        let updateFields = {};

        if (emailType === "VERIFY") {
            updateFields = { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 };
        } else if (emailType === "RESET") {
            updateFields = { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 };
        }

        await User.findByIdAndUpdate(userId, updateFields);

        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "59d7f45ac22559",
                pass: "ee5e1ade3566d1"
            }
        });

        let mailOption = {};

        if (emailType === 'VERIFY') {
            mailOption = {
                from: 'usman853136@gmail.com',
                to: email,
                subject: "Verify your email",
                html: ` <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Email Verification</title>
                        </head>
                        <body style="font-family: Arial, sans-serif;">
                            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                                <h2 style="text-align: center;">Email Verification</h2>
                                <p>Welcome to our platform! Please click the button below to verify your email address:</p>
                                <div style="text-align: center; margin-top: 20px;">
                                    <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a>
                                </div>
                                <p>If you didn't create an account with us, you can safely ignore this email.</p>
                                <p>Thank you,<br>Usman</p>
                            </div>
                        </body>
                    </html>`
            };
        } else if (emailType === 'RESET') {
            mailOption = {
                from: 'usman853136@gmail.com',
                to: email,
                subject: "Reset your password",
                html: ` <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Password Reset</title>
                        </head>
                        <body style="font-family: Arial, sans-serif;">
                            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                                <h2 style="text-align: center;">Password Reset</h2>
                                <p>You have requested to reset your password. Click the button below to reset it:</p>
                                <div style="text-align: center; margin-top: 20px;">
                                    <a href="${process.env.DOMAIN}/resetpassword?token=${hashedToken}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>
                                </div>
                                <p>If you didn't request this, you can safely ignore this email.</p>
                                <p>Thank you,<br>Usman</p>
                            </div>
                        </body>
                    </html>`
            };
        }

        const mailResponse = await transporter.sendMail(mailOption);

        return mailResponse;
    } catch (error: any) {
        throw new Error(error.message);
    }
}
