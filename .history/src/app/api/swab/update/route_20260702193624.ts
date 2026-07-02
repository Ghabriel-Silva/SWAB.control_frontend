


export async function PATCH(req: Request) {
    const body = await req.json()

    const id = ''
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/swab/${id}/check`,
        {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }
    )

    if (!response.ok) {
        return Response.json(data, { status: 401 })
    }


}