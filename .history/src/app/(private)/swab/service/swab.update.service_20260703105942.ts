import { ResponseError } from "@/app/shared/types/error.response";
import { UpdateSwabType } from "../validations/update.swab.schema";


export async function UpdateSwabService(data: UpdateSwabType, id: string) {
    const resp = await fetch(`/api/swab/${id}/check`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    const dataRes = await resp.json()

    if (!resp.ok) {
        const err = dataRes as ResponseError
        throw new Error(err.message || 'Erro ao atualizar Swab')
    }

    return dataRes

}