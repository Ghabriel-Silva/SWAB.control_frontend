import { cookies } from "next/headers";

export async function GET(req: Request) {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value


    

    try {
        const { searchParams } = new URL(req.url);

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/swab?${searchParams.toString()}`,
            {
                headers: {
                    ...(token && { Authorization: `Bearer ${token}` }),
                },
                cache: "no-store",
            }
        );
        const data = await res.json()

        return Response.json(data)
    } catch {
        return Response.json(
            { message: "Servidor indisponível" },
            { status: 500 }
        )
    }

}