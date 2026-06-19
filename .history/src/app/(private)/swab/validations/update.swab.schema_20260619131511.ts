import * as yup from 'yup'
import { SwabCheckResult } from '../../types/swab'

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
        .transform((_, origianlValue) => {
            if (origianlValue.trim() === '') return null
            return origianlValue
        })
        .nullable()
        .max(20, 'O lote informado deve conter no máximo 20 caracteres'),


    result: yup
        .mixed<SwabCheckResult>()
        .oneOf(
            Object.values(SwabCheckResult),
            "Defina um valor valido"
        )
        .required('É obrigatório informar o resultado do swab'),
})

export type UpdateSwabType = yup.InferType<typeof updateSwabSchema>