import { useQuery } from "@tanstack/react-query";
import { SwabApiItem } from "../types/swab.response";



export function useGetSwabByLote(lote: string) {
    return useQuery < SwabResponse<SwabApiItem>({
        queryKey: ['swabLote'],
        queryFn: () =>
    })
}