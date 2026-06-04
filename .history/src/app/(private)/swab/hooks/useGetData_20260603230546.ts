import { useQuery } from "@tanstack/react-query"



export function useGetData(){
    return useQuery({
        queryKey:['swab'], 
        queryFn: async ()=>{

        }
    })
}