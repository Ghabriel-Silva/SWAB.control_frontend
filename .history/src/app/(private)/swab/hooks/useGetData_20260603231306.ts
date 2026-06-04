import { useQuery } from "@tanstack/react-query"
import { swabService } from "../service/swab.service"
import { SwabResponse } from "../types/swab.response"


export function useGetData() {
    return useQuery({
        queryKey: ['swab'],
        queryFn: async () => {
            const data: SwabResponse = await swabService()
            return data
        }
    })
}