import { SwabResponse } from "../types/swab.response";

export async function swabService(): Promise<SwabResponse> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/swab`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
    });

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
        const text = await res.text();
        console.error("API retornou HTML:", text.slice(0, 300));
        throw new Error(`Servidor retornou status ${res.status}`);
    }

    const json: SwabResponse = await res.json();
    if (!res.ok) throw json;

    return json;
}