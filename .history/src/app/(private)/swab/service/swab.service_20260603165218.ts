export async function swabService(): Promise<SwabResponse> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/swab`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
    });

    const contentType = res.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
        const text = await res.text();
        console.error("HTML recebido:", text.slice(0, 500));
        throw new Error(`Status ${res.status} - resposta não é JSON`);
    }

    const json = await res.json();
    console.error("JSON recebido:", JSON.stringify(json)); // ← veja isso no terminal

    if (!res.ok) throw new Error(`Status ${res.status}: ${JSON.stringify(json)}`);

    return json as SwabResponse;
}