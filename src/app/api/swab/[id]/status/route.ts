import { cookies } from "next/headers";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    try {
        const body = await req.json();
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/swab/${encodeURIComponent(id)}/status`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    ...(token && { Authorization: `Bearer ${token}` }),
                },
                cache: "no-store",
                body: JSON.stringify(body),
            }
        );

        const data = await response.json();

        return Response.json(data, { status: response.status });
    } catch {
        return Response.json(
            { message: "Servidor indisponível" },
            { status: 500 }
        );
    }
}
