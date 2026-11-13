import { OperatorsResponse } from "../types/operators/operator.response";

async function getOperatorPage(page: number): Promise<OperatorsResponse> {
    const res = await fetch(`/api/operator/get?page=${page}&limit=100`)

    const json = await res.json()

    if (!res.ok) {
        throw new Error(json?.message || 'Erro ao buscar operadores')
    }

    return json
}

export async function GetOperatorService(): Promise<OperatorsResponse> {
    const response = await getOperatorPage(1);
    const operators = [...response.data];
    for (let page = 2; page <= (response.meta?.totalPages ?? 1); page++) {
        const next = await getOperatorPage(page);
        operators.push(...next.data);
    }
    return { ...response, data: operators };
}
