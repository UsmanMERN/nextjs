import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModal";

// Establish database connection
connect();

export async function GET(request: NextRequest) {
    try {
        // Clear token cookie
        const response = NextResponse.json({ message: "Logout successful", success: true });
        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

        return response;
    } catch (error) {
        // Handle errors
        console.error("Logout error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
