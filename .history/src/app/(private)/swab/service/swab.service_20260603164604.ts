import { SwabResponse } from "../types/swab.response";

export async function swabService(): Promise<SwabResponse> {
    const res = await fetch("/api/swab/get", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })

    // Garante que só parseia se for JSON
    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
        throw new Error(`Resposta inesperada do servidor: ${res.status}`);
    }

    const json: SwabResponse = await res.json();

    if (!res.ok) throw json;

    return json;
}