import { useQuery } from "@tanstack/react-query"



const useGetData(){
    return useQuery({
        queryKey:['swab'], 
        queryFn: async ()
    })
}