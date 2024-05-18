import dbConnect from "@/lib/dbConnect";
import userModal from "@/model/UserModel";
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/helper/sendVerification";

export async function POST(request: Request) {
    await dbConnect()
    try {
        const { username, email, password } = await request.json()
    } catch (error) {
        console.error("Error reqistering user", error);
        return Response.json({ success: false, message: "Error while registering user" }, { status: 500 })
    }
}
