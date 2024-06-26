import { z } from "zod"

export const userNameValidation = z.string().min(3, "username must be atleast 3 character long").max(20, "username must not be more than 20 characters").regex(/^[a-zA-Z0-9_]+$/, "username must not contain special characters")

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({ message: "Invalid Email address" }),
    passwrod: z.string().min(6, { message: "Password must be 8 digit long" }).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least 8 characters, including uppercase and lowercase letters, and at least one number.")
}) 