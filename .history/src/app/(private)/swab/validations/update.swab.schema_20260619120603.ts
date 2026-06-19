import * as yup from 'yup'

export const updateSwabSchema = yup.object({
    validatedAt: yup
        .date()
        .optional(),
    faucetCode: yup
        .string()
        .required('A torneira è obrigatoria')
})

export type UpdateSwabType = yup.InferType<typeof updateSwabSchema>