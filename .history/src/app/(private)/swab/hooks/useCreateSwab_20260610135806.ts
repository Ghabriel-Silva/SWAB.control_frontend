import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSwabService } from "../service/create.swab.service";
import {  SwabResponse } from "../types/swab.response";
import { FormCreateType } from "../types/form.create.swab";
import { CreateSwabResponse } from "../types/create.swab.response";

export function useCreateSwab() {
    const queryCliente = useQueryClient()
    return useMutation<SwabResponse<CreateSwabResponse>, Error, FormCreateType>({
        mutationFn: (data) => CreateSwabService(data),
        onSuccess: async () => {
            await queryCliente.invalidateQueries({
                queryKey: ['swab']
            })
        },
    })

}