import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";
import { ResponseError } from "@/app/shared/types/error.response";
import { UpdateSwabType } from "../validations/update.swab.schema";
import { UpdateSwabService } from "../service/swab.update.service";


export function useUpdateSwab() {
    // const queryClient = useQueryClient()
    return useMutation<SwabResponse<Respons>, ResponseError, UpdateSwabType>({
        mutationFn: (data) => UpdateSwabService(data)
    })
}