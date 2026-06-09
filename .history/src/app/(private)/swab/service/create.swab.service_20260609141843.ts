import { CreateSwabType } from "../validations/create.swab.schema";


export async function CreateSwabService(data: CreateSwabType) {
    const result = await fetch('/api/swab/create')
    const json = await res.json()

    if (!res.ok) {
        throw new Error(json?.message || "Erro ao buscar swab");
    }

    return json
}