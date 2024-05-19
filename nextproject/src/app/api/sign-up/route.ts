import dbConnect from "@/lib/dbConnect";
import userModal from "@/model/UserModel";
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/helper/sendVerification";

export async function POST(request: Request) {
    await dbConnect()
    try {
        const { username, email, password } = await request.json()
        const verifyCode = Math.floor(100000 + Math.random() * 90000)

        const existingUserVerifiedByUserName = await userModal.findOne({ username, isVerified: true })
        if (existingUserVerifiedByUserName) {
            return Response.json({ success: false, message: "username is already taken" }, { status: 400 })
        }

        const existingUserEmail = await userModal.findOne({ email })
        // if (existingUserEmail) {
        //     if
        // }
        if (existingUserEmail) {
            if (existingUserEmail.isVerified) {
                return Response.json({ success: false, message: "User already exist" }, { status: 400 })
            } else {
                const hashedPassword = await bcrypt.hash(password, 10)
                existingUserEmail.password = hashedPassword
                existingUserEmail.verifyCode = verifyCode.toString()
                const expiryDate = new Date()
                expiryDate.setHours(expiryDate.getHours() + 1)
                existingUserEmail.verifyCodeExpiry = expiryDate
                // const newUser = new userModal({ username, email, password: hashedPassword, verifyCode, verifyCodeExpiry: expiryDate, isVerified: false, isAcceptingMessge: true, messages: [] })
                await existingUserEmail.save()
            }
            // return Response.json({ success: false, message: "username is already taken" }, { status: 400 })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1)

            const newUser = new userModal({ username, email, password: hashedPassword, verifyCode, verifyCodeExpiry: expiryDate, isVerified: false, isAcceptingMessge: true, messages: [] })
            await newUser.save()
        }
        const emailRespose = await sendVerificationEmail(email, username, verifyCode.toString())

        if (!emailRespose.success) {
            return Response.json({ success: false, message: "Error sending email" }, { status: 500 })
        }
        return Response.json({ success: true, message: "user registered successfully, please verify your email" }, { status: 201 })
    } catch (error) {
        console.error("Error reqistering user", error);
        return Response.json({ success: false, message: "Error while registering user" }, { status: 500 })
    }
}
