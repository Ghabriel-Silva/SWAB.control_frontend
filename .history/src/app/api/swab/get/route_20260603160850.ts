export async function GET(req: Request) {
    const body = await req.json()
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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