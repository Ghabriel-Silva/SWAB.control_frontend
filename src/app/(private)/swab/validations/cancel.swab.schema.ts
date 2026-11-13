import * as yup from "yup";

export const cancelSwabSchema = yup.object({
    cancelReason: yup.string()
        .trim()
        .required("Informe o motivo do cancelamento")
        .min(10, "O motivo deve ter no mínimo 10 caracteres")
        .max(250, "O motivo deve ter no máximo 250 caracteres"),
});

export type CancelSwabType = yup.InferType<typeof cancelSwabSchema>;
