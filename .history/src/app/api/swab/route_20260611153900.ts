import { cookies } from "next/headers";

export async function GET(req: Request) {

    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    const { searchParams } = new URL(req.url);
]
    const status = searchParams.get("status") ?? "PENDING";
    const page = searchParams.get("page") ?? "1";
    const limit = searchParams.get("limit") ?? "20";


    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/swab?result=PENDING`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            cache: "no-store",
        })

        const data = await res.json()

        return Response.json(data)
    } catch {
        return Response.json(
            { message: "Servidor indisponível" },
            { status: 500 }
        )
    }

}