import { useQuery } from "@tanstack/react-query";
import { SwabApiItem, SwabResponse } from "../types/swab.response";
import { swabService } from "../service/swab.service";
import { GetSwabsParams } from "../types/get.swab.params";

export function useGetSwab(filters: GetSwabsParams) {
    return useQuery<SwabResponse<SwabApiItem[]>>({
        queryKey: ["swab", filters],
        queryFn: () => swabService(params),
        refetchInterval: 5_0000,
    })
}