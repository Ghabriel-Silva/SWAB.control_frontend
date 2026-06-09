
import { cookies } from "next/headers";

export async function POST(req: Request) {
    const body = await req.json()
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/swab`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            cache: "no-store",
            body: JSON.stringify(body),
        }
    )

    const data = await response.json()

    if (!response.ok) {
        return Response.json(data, { status: 401 })
    }
    return Response.json(
        data
    )
}