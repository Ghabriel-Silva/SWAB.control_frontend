import { cookies } from "next/headers"

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params

    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    const body = await req.json()


    const id = '40b11ec3-d4b6-42a7-9b72-e262123fcb95'
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/swab/${id}/check`,
        {
            method: 'PATCH',
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