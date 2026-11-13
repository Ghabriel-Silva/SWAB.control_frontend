import { ApiResponse } from "@/app/shared/types/api.response";
import { CreateSwabResponse } from "../types/create.swab.response";
import { FormCreateType } from "../types/form.create.swab";


export async function CreateSwabService(
    data: FormCreateType
): Promise<ApiResponse<CreateSwabResponse>> {
    const res = await fetch('/api/swab/create', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    const json = await res.json()

    if (!res.ok) {
        throw new Error(json?.message || "Erro ao criar swab");
    }

    return json as ApiResponse<CreateSwabResponse>
}