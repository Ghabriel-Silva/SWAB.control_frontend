import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/swab`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        cache: "no-store",
    })

    const data = await res.json();

    return Response.json(data);
}