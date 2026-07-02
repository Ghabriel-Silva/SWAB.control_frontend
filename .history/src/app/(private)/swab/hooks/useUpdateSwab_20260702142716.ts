import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SwabResponse } from "../types/swab.response";


export async function useUpdateSwab() {
    const queryClient = useQueryClient()
    return useMutation<SwabResponse<>>({

    })
}