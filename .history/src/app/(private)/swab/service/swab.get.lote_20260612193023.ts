
export async function SwabGetByLote(lote: string) {
    const response = await fetch(`/api/swab?lote=${lote}`);

    if (!response.ok) {
        throw new Error("Erro ao buscar lote");
    }

    return response.json()
}