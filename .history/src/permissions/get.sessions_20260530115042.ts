import { cookies } from "next/headers";
import { MyJwtPayload } from "./types";
import { jwtVerify } from "jose";



export async function getSession() {
    try {
        const cookiesStore = await cookies()
        const token = cookiesStore.get('token')?.value

        if (!token) return null

        const SECRET = new TextEncoder().encode(process.env.JWT_SECRET)
        const payloud = await jwtVerify(token, SECRET)

        return payloud as unknown as MyJwtPayload

    } catch {
        return null
    }

}