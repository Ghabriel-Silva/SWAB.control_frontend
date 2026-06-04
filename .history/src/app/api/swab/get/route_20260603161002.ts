export async function GET(req: Request) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/swab`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
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