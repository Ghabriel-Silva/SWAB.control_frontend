import * as yup from 'yup'

export const updateSwabSchema = yup.object({
    validatedAt: yup
        .date()
        .optional(),
    faucetCode: yup
        .string()
        .transform(removeBlankSpace)
        .max(50, 'O código da torneira deve conter no máximo 50 caracteres')
        .required('É obrigatório informar o código da torneira utilizada'),
})

export type UpdateSwabType = yup.InferType<typeof updateSwabSchema>