import { useQuery } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";

export function useGetSwab() {
    return useQuery<SwabResponse>({
        queryKey: ["swab"],
        queryFn: Cre,
        refetchInterval: 5_0000,

    })

}