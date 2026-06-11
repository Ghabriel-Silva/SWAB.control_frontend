import { useQuery } from "@tanstack/react-query";
import { SwabApiItem, SwabResponse } from "../types/swab.response";
import { swabService } from "../service/swab.service";

export function useGetSwab(params: {
    results: string;
    page: number;
    limit: number;
}) {
    return useQuery<SwabResponse<SwabApiItem[]>>({
        queryKey: ["swab", params],
        queryFn: () => swabService(params),
        refetchInterval: 5_0000,
    })
}