import { useQuery } from "@tanstack/react-query";
import { SwabApiItem, SwabResponse } from "../types/swab.response";
import { SwabGetByLote } from "../service/swab.get.lote";



export function useGetSwabByLote(lote: string) {
    return useQuery<SwabResponse<SwabApiItem>>({
        queryKey: ["swabLote", lote],
        queryFn: () => SwabGetByLote(lote),
        enabled: !!lote,
    });
}