import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSwabService } from "../service/create.swab.service";

import { SwabResponse } from "../types/swab.response";
import { CreateSwabType } from "../validations/create.swab.schema";
import { toaster } from "@/components/ui/toaster";

export function useCreateSwab() {
    const queryCliente = useQueryClient()
    return useMutation<SwabResponse, Error, CreateSwabType>({
        mutationFn: (data) => CreateSwabService(data),
        onSuccess: async () => {
            await queryCliente.invalidateQueries({
                queryKey: ['swab']
            })
        },
        onError: (error) => {
            toaster.create({
                title: "Error",
                description: error?.message ?? "Erro inesperado ao criar swab",
                closable: true,
                duration: 2000,
                type: "error"
            })
        }

    })

}