import { GetSwabsParams } from "../types/get.swab.params";
import { SwabApiItem, SwabResponse } from "../types/swab.response";

export async function swabService(filters: GetSwabsParams): Promise<SwabResponse<SwabApiItem[]>> {
    const query = new URLSearchParams(
        Object.entries(filters)
            .filter(([, value]) => value !== undefined && value !== null)
    )
    const res = await fetch(`/api/swab?${query}`)

    const json = await res.json()

    if (!res.ok) {
        throw new Error(json?.message || "Erro ao buscar swab");
    }

    return json
}