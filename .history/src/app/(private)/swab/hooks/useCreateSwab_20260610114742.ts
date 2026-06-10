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
        onError: (err) => {
            toaster.create({
                title: "Erro ao criar pedido",
                description: error?.message ?? "Erro inesperado ao criar o pedido",
                closable: true,
                duration: 2000,
                type: "error"
            })
        }

    })

}