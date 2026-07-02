import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";
import { ResponseError } from "@/app/shared/types/error.response";


export async function useUpdateSwab() {
    const queryClient = useQueryClient()
    return useMutation<SwabResponse<any>,ResponseError, Update >({

    })
}