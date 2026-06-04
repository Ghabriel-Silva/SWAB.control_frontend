import { SwabResponse } from "../types/swab.response";

export async function swabService(): Promise<SwabResponse> {
    const res = await fetch("/api/swab")

    const json = await res.json()

    if (!res.ok) {
        throw new Error(json?.message || "Erro ao buscar swab");
    }

    return json a
}