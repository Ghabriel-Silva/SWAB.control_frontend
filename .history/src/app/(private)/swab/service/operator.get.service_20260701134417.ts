

export async function GetOperatorService() {
    const resp = a fetch('/api/operator')
    if(!resp){
        throw new Error('Erro ao buscar operadores')
    }
}