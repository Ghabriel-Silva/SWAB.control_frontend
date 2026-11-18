import { cookies } from "next/headers";

export async function GET() {
    const token = (await cookies()).get("token")?.value;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/area`, {
            headers: {
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            cache: "no-store",
        })

        return Response.json(await response.json(), { status: response.status });
    } catch {
        return Response.json({ message: "Servidor indisponível" }, { status: 500 });
    }
}
