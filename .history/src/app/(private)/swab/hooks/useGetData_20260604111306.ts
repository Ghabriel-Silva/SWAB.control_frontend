import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";
import { swabService } from "../service/swab.service";

export function useGetSwab() {
    const query = useQueryClient()
    return useQuery<SwabResponse>({
        queryKey: ["swab"],
        queryFn: swabService,
        refetchInterval: 5_000,
        onError:(err)=>{

        }
        
    })

}