import { useQuery } from "@tanstack/react-query";
import { SwabApiItem } from "../types/swab.response";
import { SwabGetByLote } from "../service/swab.get.lote";
import { ApiResponse } from "@/app/shared/types/api.response";



export function useGetSwabByLote(lote: string) {
    return useQuery<ApiResponse<SwabApiItem[]>>({
        queryKey: ["swabLote", lote],
        queryFn: () => SwabGetByLote(lote),
        enabled: !!lote,
    });
}