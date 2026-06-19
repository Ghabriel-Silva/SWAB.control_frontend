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
        .required('Informe a torneira'),

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

    valueAtp: yup
        .number()
        .typeError('O resultado ATP deve ser informado com um valor numérico')
        .integer('O resultado ATP deve ser um número inteiro')
        .min(0, 'O valor ATP não pode ser negativo')
        .transform((_, v) => {
            if (v === '' || v === undefined || v === null) {
                return null
            }
            return Number(v)
        })
        .when('performedType', ([performedType], schema) => {
            if (ATP_REQUIRED_TYPES.includes(performedType)) {
                return schema.required(
                    'É obrigatório informar o resultado ATP para swabs ATP e MICRO'
                )
            }

            return schema.nullable()
        }),
})

export type UpdateSwabType = yup.InferType<typeof updateSwabSchema>