import * as yup from 'yup'

export const pdateSwabSchema = yup.object({
    validatedAt: yup
    .date()
    .optional(),
})

export type UpdateSwab