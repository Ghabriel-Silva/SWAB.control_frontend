import { SwabResponse } from "../types/swab.response";

export async function swabService(params: {
    status: string;
    page: number;
    limit: number;
}) {
    const res = await fetch("/api/swab", {
        para
    })

    const json = await res.json()

    if (!res.ok) {
        throw new Error(json?.message || "Erro ao buscar swab");
    }

    return json
}