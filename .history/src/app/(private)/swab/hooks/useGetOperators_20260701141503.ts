import { useQuery } from "@tanstack/react-query";
import { GetOperatorService } from "../service/operator.get.service";



export function useGetOperators() {
    return useQuery<>({
        queryKey: ['operator'],
        queryFn: () => GetOperatorService()
    })
}