import { SwabResponse } from "../types/swab.response";
import { swabService } from "../service/swab.service";

export function useGetSwab() {
    return useQuery<SwabResponse>({
        queryKey: ["swab"],
        queryFn: swabService,
        refetchInterval: 5_0000,

    })

}