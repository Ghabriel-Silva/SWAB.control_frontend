export async function GET() {
    let data: unknown;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/swab`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        }
    )

    // Verifica se a resposta é JSON antes de parsear
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
        data = await response.json();
    } else {
        // API retornou HTML (página de erro 500, 502, etc.)
        const text = await response.text();
        console.error("API returned non-JSON response:", text.slice(0, 300));
        return Response.json(
            { message: "Serviço indisponível", status: response.status },
            { status: 502 }
        );
    }

    if (!response.ok) {
        return Response.json(data, { status: response.status }); // repassa o status real
    }

    return Response.json(data);
}