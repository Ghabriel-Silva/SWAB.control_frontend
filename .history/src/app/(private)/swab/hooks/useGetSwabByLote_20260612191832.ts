import { useQuery } from "@tanstack/react-query";



export function useGetSwabByLote<SwabResponse>(lote: string) {
    return useQuery({
        queryKey: ['swabLote'],
        queryFn: () =>
    })
}