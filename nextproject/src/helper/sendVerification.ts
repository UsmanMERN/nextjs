import { resend } from "@/lib/resend"
import VerificationEmail from "../../emails/verificationEmail"
import { ApiResponse } from "@/types/ApiResponse"

export async function sendVerificationEmail(email: string, username: string, verifyCode: string): Promise<ApiResponse> {
    try {
        const { data, error } = await resend.emails.send({
            from: 'usman@codevpk.com',
            to: email,
            subject: 'Mystry message | Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
        })
        return { success: true, message: "Verification email send successfuly" }
    } catch (emailError) {
        console.error("Error sending verification email", emailError);
        return { success: false, message: "Failed to send message" }
    }
}
