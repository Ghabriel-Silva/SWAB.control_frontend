import { useQuery } from "@tanstack/react-query";
import { GetOperatorService } from "../service/operator.get.service";
import { OperatorsResponse } from "../types/operators/operator.response";



export function useGetOperators() {
    return useQuery<OperatorsResponse>({
        queryKey: ['operator'],
        queryFn: () => GetOperatorService()
    })
}