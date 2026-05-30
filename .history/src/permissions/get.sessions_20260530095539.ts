import { cookies } from "next/headers";
import { MyJwtPayload } from "./types";



export async function getSession() {
    try {
        const cookiesStore = await cookies()
        const token = cookiesStore.get('token')?.value

        if(!token) return null

        const SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

    } catch {

    }

}