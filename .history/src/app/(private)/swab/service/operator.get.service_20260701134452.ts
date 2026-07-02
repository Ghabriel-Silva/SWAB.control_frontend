

export async function GetOperatorService() {
    const res = await fetch('/api/operator')

    const json = await res.json()

    if (!res) {
        throw new Error('Erro ao buscar operadores')
    }

    return resp
}