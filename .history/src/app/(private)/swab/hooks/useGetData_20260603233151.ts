import { useQuery } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";
import { swabService } from "../service/swab.service";

export function useGetData() {
    return useQuery<SwabResponse>({
        queryKey: ["swab"],
        queryFn: async () => {
            const res = await swabService()
            if (!res.ok) throw new Error(json.message ?? "Erro");
            return res
        },
    });
}