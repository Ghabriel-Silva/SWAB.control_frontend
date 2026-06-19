import * as yup from 'yup'

export const updateSwabSchema = yup.object({
    validatedAt: yup
        .date()
        .optional(),
    faucetCode: yup
        .string()
        .trim()
        .max(50, 'O código da torneira deve conter no máximo 50 caracteres')
        .required('Informe a torneira utilizada'),

    batch: yup
        .string()
        .max(20, 'O lote informado deve conter no máximo 20 caracteres')
})

export type UpdateSwabType = yup.InferType<typeof updateSwabSchema>