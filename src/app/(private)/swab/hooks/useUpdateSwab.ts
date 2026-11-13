import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ResponseError } from "@/app/shared/types/error.response";
import { UpdateSwabService } from "../service/swab.update.service";
import { ResponseUpdate } from "../types/update.response";
import { UpdateSwabParams } from "../types/update.swab.params";
import { ApiResponse } from "@/app/shared/types/api.response";


export function useUpdateSwab() {
    const queryClient = useQueryClient()
    return useMutation<ApiResponse<ResponseUpdate>, ResponseError, UpdateSwabParams>({
        mutationFn: ({ data, id }) => UpdateSwabService(data, id),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["swab"]
            })
            await queryClient.invalidateQueries({
                queryKey: ["swabLote"]
            })
        }
    })
}