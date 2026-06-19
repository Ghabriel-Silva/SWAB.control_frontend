import * as yup from 'yup'

export const updateSwabSchema = yup.object({
    validatedAt: yup
        .date()
        .optional(),
    faucetCode: yup
        .string()
        .ti
        .max(50, 'O código da torneira deve conter no máximo 50 caracteres')
        .required('Informe a torneira utilizada'),
})

export type UpdateSwabType = yup.InferType<typeof updateSwabSchema>