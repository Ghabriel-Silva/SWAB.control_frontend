


export async function PAT(req: Request) {
    const body = await req.json()

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/swab`,
    )

}