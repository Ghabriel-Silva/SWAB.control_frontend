import { useQuery } from "@tanstack/react-query";



export function useGetSwabByLote(lote: string) {
    return useQuery({
        queryKey: ['swabLote'],
        queryFn: () =>
    })
}