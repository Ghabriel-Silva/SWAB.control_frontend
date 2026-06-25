import * as yup from 'yup'
import { SwabCheckResult, SwabCheckType } from '../../types/swab'

const ATP_REQUIRED_TYPES = [
    SwabCheckType.ATP,
    SwabCheckType.MICRO
]

export const updateSwabSchema = yup.object({
    validatedAt: yup
        .date()
        .optional(),
    faucetCode: yup
        .string()
        .required("Informe a torneira")
        .test(
            "different-from-last-faucet",
            "Justifique o uso da mesma torneira",
            function (value) {
                const context = this.options.context as
                    | { lastFaucetLocation?: string }
                    | undefined;

                if (!context?.lastFaucetLocation) return true

                if (value !== context.lastFaucetLocation) return true

                return (this.parent.sameFaucetJustification?.trim().length ?? 0) > 0
            }
        ),
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

    performedType: yup
        .mixed<SwabCheckType>()
        .oneOf(
            Object.values(SwabCheckType),
            "O tipo de swab deve ser VISUAL, ATP ou MICRO"
        )
        .test(
            'update_type_swab',
            'Justifique a mudança de Swab',
            function (value) {
                const context = this.options.context as
                    { typeSwabBD: SwabCheckType }

                if (!context?.) return true

                const valueAtpMicro = ATP_REQUIRED_TYPES.includes(context.typeSwabBD as SwabCheckType)

                if (valueAtpMicro && value === SwabCheckType.VISUAL) {
                    return (this.parent.updateSwabJustification.trim().length ?? 0) > 0
                }

                return true

            }
        )
        .required(),

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
                    'Informe o Valor do ATP (RLU)'
                )
            }
            return schema.transform((_, originalValue) => {
                if (originalValue) return null
            }).nullable()

        }),

    observation: yup
        .string()
        .max(500, 'O campo observações deve conter no máximo 500 caracteres')
        .notRequired()
        .trim()
        .when('result', {
            is: (value: SwabCheckResult) =>
                value === SwabCheckResult.REPROVED,
            then: (schema) =>
                schema.required('Oberservação é obrigatório quando o swab for reprovado')
        }),
    sameFaucetJustification: yup
        .string()
        .max(250, 'O maximo de caracteres é 250')
        .trim()
        .test(
            'same-faucet',
            'Justifique o uso da mesma torneira',
            function (value) {
                const { faucetCode } = this.parent;
                const context = this.options.context as
                    | { lastFaucetLocation?: string }
                    | undefined;
                if (faucetCode === context?.lastFaucetLocation) {
                    return !!value?.trim();
                }

                return true;
            }
        )
        .nullable(),

    updateSwabJustification: yup
        .string()
        .max(250, 'O maximo de caracteres é 250')
        .trim()
        .nullable(),
})

export type UpdateSwabType = yup.InferType<typeof updateSwabSchema>