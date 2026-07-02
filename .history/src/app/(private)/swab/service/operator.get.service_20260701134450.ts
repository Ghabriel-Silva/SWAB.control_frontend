

export async function GetOperatorService() {
    const res = await fetch('/api/operator')

    const json = await res.json()

    if (!resp) {
        throw new Error('Erro ao buscar operadores')
    }

    return resp
}