

export async function GetOperatorService() {
    const resp = await fetch('/api/operator')
    if (!resp) {
        throw new Error('Erro ao buscar operadores')
    }

    return resp
}