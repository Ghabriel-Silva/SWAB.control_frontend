import { useQuery } from "@tanstack/react-query"
import { swabService } from "../service/swab.service"

function mapToRows(data: SwabResponse): SwabGridRow[] {
    return data.data.map(item => ({
        id: item.id,
        lote: item.internalCode,
        dataHora: item.createdAt,
        tankSilo: item.tank.name,
        ultimaTorneira: item.lastFaucetTank,
        tipoSwab: item.check.type,
        resultado: item.check.result,
        valorAtp: item.check.valueAtp,
        operador: item.operator,
    }));
}


export function useGetData() {
    return useQuery({
        queryKey: ['swab'],
        queryFn: async () => {
            const data = await swabService()
            return data
        }
    })
}