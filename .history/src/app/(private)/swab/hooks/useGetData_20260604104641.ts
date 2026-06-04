import { useQuery } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";
import { swabService } from "../service/swab.service";

export function useGetSwab() {
    const function 
    return useQuery<SwabResponse>({
        queryKey: ["swab"],
        queryFn: swabService,
    });
}