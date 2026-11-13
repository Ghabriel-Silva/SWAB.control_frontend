import type { ApiResponse } from "@/app/shared/types/api.response";
import type { CancelSwabResponse } from "../types/cancel.swab";
import type { CancelSwabType } from "../validations/cancel.swab.schema";

export async function cancelSwab(
    data: CancelSwabType,
    id: string
): Promise<ApiResponse<CancelSwabResponse>> {
    const response = await fetch(`/api/swab/${encodeURIComponent(id)}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result?.message || "Erro ao cancelar SWAB")
    }

    return result
}
