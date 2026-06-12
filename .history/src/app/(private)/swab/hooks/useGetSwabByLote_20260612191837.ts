import { useQuery } from "@tanstack/react-query";
import { SwabApiItem } from "../types/swab.response";



export function useGetSwabByLote<SwabResponse<SwabApiItem>(lote: string) {
    return useQuery({
        queryKey: ['swabLote'],
        queryFn: () =>
    })
}