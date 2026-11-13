import { cookies } from "next/headers";


export async function GET(req: Request) {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    const { searchParams } = new URL(req.url)

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/operator?${searchParams.toString()}`, {
            headers: {
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            cache: 'no-store'
        })

        const data = await response.json()

        return Response.json(data, { status: response.status })

    } catch {
        return Response.json(
            { message: "Servidor indisponível" },
            { status: 500 }
        )
    }
}
