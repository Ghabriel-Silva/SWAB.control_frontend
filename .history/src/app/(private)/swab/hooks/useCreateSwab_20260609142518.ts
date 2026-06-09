import { useMutation } from "@tanstack/react-query";
import { CreateSwabService } from "../service/create.swab.service";
import { CreateSwabRequest } from "../types/create.swab.request";
import { SwabResponse } from "../types/swab.response";

export function useCreateSwab() {
    return useMutation<SwabResponse, Error, CreateSwabRequest>({
        mutationFn: (data) => CreateSwabService(data),
    });
}