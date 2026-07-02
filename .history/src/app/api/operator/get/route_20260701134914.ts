import { cookies } from "next/headers";


export function GET(req: Request) {
    const cookieStore = cookies()
}