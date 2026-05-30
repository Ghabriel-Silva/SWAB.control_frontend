import { cookies } from "next/headers";
import { MyJwtPayload } from "./types";



export async function getSession() {
    try {
        const cookiesStore = await cookies()
        const token = cookiesStore.get('token')?.value

        if(token)

    } catch {

    }

}