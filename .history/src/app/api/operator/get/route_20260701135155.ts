import { cookies } from "next/headers";


export async function GET(req: Request) {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    try {
        const response = await fetch('process.env.NEXT_PUBLIC_API_URL}/')

    } catch {

    }
}