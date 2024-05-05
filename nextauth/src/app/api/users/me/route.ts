import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect()

export async function POST(request: NextRequest) {
    try {
        // extract data from token
        console.log('first')
        const userId = await getDataFromToken(request)
        console.log('userId', userId)
        const user = await User.findById({ _id: userId }).select('-password')
        // console.log('user', user)
        return NextResponse.json({ message: "User found", data: user })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}