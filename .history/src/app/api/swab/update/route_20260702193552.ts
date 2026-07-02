


export async function PATCH(req: Request) {
    const body = await req.json()

    const id = ''
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/swab/${id}/check`,
        {
            method:''
        }
    )


}