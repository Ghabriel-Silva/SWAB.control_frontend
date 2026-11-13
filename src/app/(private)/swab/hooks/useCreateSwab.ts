import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSwabService } from "../service/create.swab.service";
import { FormCreateType } from "../types/form.create.swab";
import { CreateSwabResponse } from "../types/create.swab.response";
import { ApiResponse } from "@/app/shared/types/api.response";

export function useCreateSwab() {
    const queryCliente = useQueryClient()
    return useMutation<ApiResponse<CreateSwabResponse>, Error, FormCreateType>({
        mutationFn: (data) => CreateSwabService(data),
        onSuccess: async () => {
            await queryCliente.invalidateQueries({
                queryKey: ['swab']
            })
        },
    })

}