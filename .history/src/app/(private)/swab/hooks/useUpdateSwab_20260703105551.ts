import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";
import { ResponseError } from "@/app/shared/types/error.response";
import { UpdateSwabType } from "../validations/update.swab.schema";
import { UpdateSwabService } from "../service/swab.update.service";
import { ResponseUpdate } from "../types/update.response";
import { UpdateSwabParams } from "../types/update.swab.params";


export function useUpdateSwab() {
    const queryClient = useQueryClient()
    return useMutation<SwabResponse<ResponseUpdate>, ResponseError, UpdateSwabParams>({
        mutationFn: ({ data, id }) => UpdateSwabService( data, id ),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["swab"]
            })
        }
    })
}