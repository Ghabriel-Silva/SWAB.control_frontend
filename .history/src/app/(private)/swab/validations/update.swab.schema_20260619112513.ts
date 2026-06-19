import * as yup from 'yup'

export const UpdateSwabSchema = yup.object({
    validatedAt: yup
    .date()
    .optional(),
})

export type UpdateSwab