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
        .transform(removeBlankSpace)
        .when('performedType', ([performedType], schema) => {
            if (ATP_REQUIRED_TYPES.includes(performedType)) {
                return schema.required('É obrigatório informar o lote utilizado na análise ATP')
            }
            return schema.nullable()
        }),
})

export type UpdateSwabType = yup.InferType<typeof updateSwabSchema>