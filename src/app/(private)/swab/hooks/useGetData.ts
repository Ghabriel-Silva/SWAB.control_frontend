import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { SwabApiItem} from "../types/swab.response";
import { swabService } from "../service/swab.service";
import { GetSwabsParams } from "../types/get.swab.params";
import { ApiResponse } from "@/app/shared/types/api.response";


export function useGetSwab(filters: GetSwabsParams, enabled = true) {
    return useQuery<ApiResponse<SwabApiItem[]>>({
        queryKey: ["swab", filters],
        queryFn: ({ signal }) => swabService(filters, signal),
        enabled,
        retry: false,
        placeholderData: keepPreviousData,
        refetchInterval: 5_0000,
    })
}
