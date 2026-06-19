import * as yup from 'yup'

export const updateSwabSchema = yup.object({
    validatedAt: yup
    .date()
    .optional(),
})

export type Update