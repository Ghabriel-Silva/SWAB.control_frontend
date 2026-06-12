import { useQuery } from "@tanstack/react-query";


export function useGetSwabByLote() {
    return useQuery({
        queryKey: ['swabLote'], 
        fn
    })
}