import { useQuery } from "@tanstack/react-query";
import { swabService } from "../services/swab.service";
import { SwabResponse } from "../types/swab.response";

export function useGetSwab() {
    return useQuery<SwabResponse>({
        queryKey: ["swab"],
        queryFn: swabService,
    });
}