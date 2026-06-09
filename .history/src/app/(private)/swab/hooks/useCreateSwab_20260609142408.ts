import { useQuery } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";
import { CreateSwabService } from "../service/create.swab.service";

export function useGetSwab() {
    return useQuery<SwabResponse>({
        queryKey: ["swab"],
        queryFn: CreateSwabService,
        refetchInterval: 5_0000,

    })

}