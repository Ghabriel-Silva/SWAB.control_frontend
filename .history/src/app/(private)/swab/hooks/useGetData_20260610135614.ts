import { useQuery } from "@tanstack/react-query";
import { SwabApiItem, SwabResponse } from "../types/swab.response";
import { swabService } from "../service/swab.service";

export function useGetSwab() {
    return useQuery<SwabResponse<SwabApiItem>>({
        queryKey: ["swab"],
        queryFn: swabService,
        refetchInterval: 5_0000,

    })

}