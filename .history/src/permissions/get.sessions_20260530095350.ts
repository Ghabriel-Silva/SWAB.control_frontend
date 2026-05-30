import { cookies } from "next/headers";
import { MyJwtPayload } from "./types";



export async function getSession() {
    const cookiesStore = await cookies()
    const token =  cookiesStore.get('token')?.value

    
}