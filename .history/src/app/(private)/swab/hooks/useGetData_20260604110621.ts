import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";
import { swabService } from "../service/swab.service";

export function useGetSwab() {
    const query = useQueryClient()
    return useQuery<SwabResponse>({
        queryKey: ["swab"],
        queryFn: swabService,
        staleTime: 1000 * 60 * 5,
        
    });
}