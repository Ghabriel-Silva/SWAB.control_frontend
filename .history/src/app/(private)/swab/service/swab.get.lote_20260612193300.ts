
export async function SwabGetByLote(lote: string) {
    const response = await fetch(`/api/swab?internalCode=${lote}`)

    if (!response.ok) {
        throw new Error("Erro ao buscar lote")
    }

    return response.json()
}