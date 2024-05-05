import bcryptjs from 'bcryptjs';
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ error: "User not Exsit" }, { status: 400 })
        }

        const validatepassword = await bcryptjs.compare(password, user.password);
        if (!validatepassword) {
            return NextResponse.json({ error: "Check your credentails" }, { status: 400 })
        }

        const tokenData = { id: user._id, username: user.username, email: user.email }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' })

        const response = NextResponse.json({ message: "Logged In successful", success: true })
        response.cookies.set("token", token, { httpOnly: true })
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}