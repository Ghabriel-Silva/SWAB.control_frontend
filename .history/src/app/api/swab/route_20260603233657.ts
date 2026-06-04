export async function GET() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/swab`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        }
    )

    const data = await response.json()
    console.log("RAW swab data:", JSON.stringify(data).slice(0, 500));

    if (!response.ok) {
        return Response.json(data, { status: 401 })
    }

    return Response.json(
        data
    )
}