import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSwabService } from "../service/create.swab.service";
import { SwabApiItem, SwabResponse } from "../types/swab.response";
import { FormCreateType } from "../types/form.create.swab";

export function useCreateSwab() {
    const queryCliente = useQueryClient()
    return useMutation<SwabResponse<:, Error, FormCreateType>({
        mutationFn: (data) => CreateSwabService(data),
        onSuccess: async () => {
            await queryCliente.invalidateQueries({
                queryKey: ['swab']
            })
        },
    })

}