import { useQuery } from "@tanstack/react-query"
import { swabService } from "../service/swab.service"


export function useGetData() {
    return useQuery({
        queryKey: ['swab'],
        queryFn: async () => {
            const data:SwabS = await swabService()
            return data 
        }
    })
}