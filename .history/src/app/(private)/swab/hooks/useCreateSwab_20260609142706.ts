import { useMutation } from "@tanstack/react-query";
import { CreateSwabService } from "../service/create.swab.service";

import { SwabResponse } from "../types/swab.response";

export function useCreateSwab() {
    return useMutation<SwabResponse, Error, CreateSwa>({
        mutationFn: (data) => CreateSwabService(data),
    });
}