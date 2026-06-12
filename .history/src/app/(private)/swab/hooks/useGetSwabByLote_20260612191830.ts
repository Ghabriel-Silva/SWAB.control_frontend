import { useQuery } from "@tanstack/react-query";



export function useGetSwabByLote<Swa>(lote: string) {
    return useQuery({
        queryKey: ['swabLote'],
        queryFn: () =>
    })
}