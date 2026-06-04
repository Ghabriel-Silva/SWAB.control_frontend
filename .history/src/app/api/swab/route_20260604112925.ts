import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    try
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/swab`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        cache: "no-store",
    })

    const data = await res.json()
    console.log(data)

    return Response.json(data)
}