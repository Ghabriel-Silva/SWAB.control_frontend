import { ApiResponse } from "@/app/shared/types/api.response";
import { GetSwabsParams } from "../types/get.swab.params";
import { SwabApiItem } from "../types/swab.response";

export async function swabService(filters: GetSwabsParams, signal?: AbortSignal): Promise<ApiResponse<SwabApiItem[]>> {
    const query = new URLSearchParams(
        Object.entries(filters)
            .filter(([, value]) => value !== undefined && value !== null && value !== "")
            .map(([key, value]) => [key, String(value)])
    )
    const res = await fetch(`/api/swab?${query}`, { signal })

    const json = await res.json()

    if (!res.ok) {
        throw new Error(json?.message || "Erro ao buscar swab");
    }

    return json
}
