

export async function GetOperatorService() {
    const resp = await fetch('/api/operator')

    const json = await res.json()

    if (!resp) {
        throw new Error('Erro ao buscar operadores')
    }

    return resp
}