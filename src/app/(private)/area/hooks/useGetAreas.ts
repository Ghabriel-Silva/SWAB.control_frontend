import { useQuery } from "@tanstack/react-query";
import { getAreas } from "../service/area.get.service";

export function useGetAreas() {
    return useQuery({
        queryKey: ["area"],
        queryFn: getAreas,
    });
}
