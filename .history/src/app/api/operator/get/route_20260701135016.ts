import { cookies } from "next/headers";


export function GET(req: Request) {
    const cookieStore = awair cookies()
    const token = cookieStore.get('token')?.value
}