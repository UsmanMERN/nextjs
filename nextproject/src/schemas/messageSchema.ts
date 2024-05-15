import { z } from "zod"

export const mesageSchema = z.object({
    content: z.string().min(10, "Verification content must be 10 characters").max(300, "Verification content must be not more than 300 characters")
})