

export async function GetOperatorService() {
    const resp = fetch('/api/operator')
    if(!resp){
        throw new Error('Erro ao buscar operadores')
    }
}