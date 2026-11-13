import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ApiResponse } from "@/app/shared/types/api.response";
import { cancelSwab } from "../service/cancel.swab.service";
import type { CancelSwabParams, CancelSwabResponse } from "../types/cancel.swab";

export function useCancelSwab() {
    const queryClient = useQueryClient();

    return useMutation<ApiResponse<CancelSwabResponse>, Error, CancelSwabParams>({
        mutationFn: ({ data, id }) => cancelSwab(data, id),
        onSuccess: async () => {
            await Promise.all([
                queryClient.invalidateQueries({ queryKey: ["swab"] }),
                queryClient.invalidateQueries({ queryKey: ["swabLote"] }),
            ]);
        },
    });
}
