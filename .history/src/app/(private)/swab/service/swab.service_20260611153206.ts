import { SwabApiItem, SwabResponse } from "../types/swab.response";

export async function swabService(params: {
    result: string;
    page: number;
    limit: number;
}): Promise<SwabResponse<SwabApiItem[]>> {
    const query = new URLSearchParams({
        result: params.result,
        page: String(params.page),
        limit: String(params.limit),
    });
    const res = await fetch(`/api/swab?${query}`)


    const json = await res.json()

    if (!res.ok) {
        throw new Error(json?.message || "Erro ao buscar swab");
    }

    return json
}