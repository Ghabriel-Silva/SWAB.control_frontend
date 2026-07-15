import * as yup from 'yup'
import { SwabCheckResult, SwabCheckType } from '../../types/swab'
import { ATP_REQUIRED_TYPES } from '../types/atp.required.types';

export const updateSwabSchema = yup.object({
    operatorId: yup
        .string()
        .required('Operador é obrigatório'),
    validatedAt: yup
        .date()
        .optional(),
    faucetCode: yup
        .string()
        .required("Informe a torneira")
        .trim()
        .test(
            "different-from-last-faucet",
            "Fora da especificação",
            function (value) {
                const context = this.options.context as
                    | { lastFaucetLocation?: string }
                    | undefined;

                if (!context?.lastFaucetLocation) return true

                if (value !== context.lastFaucetLocation) return true

                return (this.parent.sameFaucetJustification?.trim().length ?? 0) > 0
            }
        ),
    performedType: yup
        .mixed<SwabCheckType>()
        .oneOf(
            Object.values(SwabCheckType),
            "O tipo de swab deve ser VISUAL, ATP ou MICRO"
        )
        .test(
            'update_type_swab',
            'Fora da especificação',
            function (value) {
                const context = this.options.context as
                    { typeSwabBD: SwabCheckType } | undefined
                if (!context?.typeSwabBD) return true

                const typeOriginalIsAtpOrMicro = ATP_REQUIRED_TYPES.includes(context.typeSwabBD as SwabCheckType)

                if (typeOriginalIsAtpOrMicro && value === SwabCheckType.VISUAL) {
                    return (this.parent.updateSwabJustification?.trim().length ?? 0) > 0
                }
                return true
            }
        )
        .required(),
    batch: yup
        .string()
        .nullable()
        .transform((_, value) => {
            return value.trim() === '' ? null : value
        })
        .when('performedType', {
            is: 'ATP',
            then: (schema) =>
                schema.required('O lote ATP é obrigatório'),
            otherwise: (schema) =>
                schema.nullable(),
        })
        .max(20, 'O lote informado deve conter no máximo 20 caracteres'),



    result: yup
        .mixed<SwabCheckResult>()
        .oneOf(
            Object.values(SwabCheckResult),
            "Defina um valor valido"
        )
        .required('É obrigatório informar o resultado do swab'),



    valueAtp: yup
        .string()
        .nullable()
        .typeError('O resultado ATP deve ser informado com um valor numérico')
        .integer('O resultado ATP deve ser um número inteiro')
        .min(0, 'O valor ATP não pode ser negativo')
        .transform((_, v) => {  // primeiro transform: retorna number | null
            if (v === '' || v === undefined || v === null) return null
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
        .transform((value) => {
            return value.trim() === '' ? null : value
        })
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
        .transform((value) => (!value?.trim() ? null : value))
        .nullable()
        .test(
            'same-faucet-justification-required',
            'Justifique o uso da mesma torneira',
            function (value) {
                const context = this.options.context as
                    | { lastFaucetLocation?: string }
                    | undefined

                const faucetCode = this.parent.faucetCode

                const isRequired =
                    context?.lastFaucetLocation &&
                    faucetCode === context.lastFaucetLocation

                if (!isRequired) return true

                return (value?.trim().length ?? 0) > 0
            }
        ),
    updateSwabJustification: yup
        .string()
        .max(250, 'O maximo de caracteres é 250')
        .trim()
        .transform((value) => (!value?.trim() ? null : value))
        .nullable()
        .test(
            'update-swab-justification-required',
            'Justifique a mudança de Swab',
            function (value) {
                const context = this.options.context as
                    | { typeSwabBD?: SwabCheckType }
                    | undefined

                const performedType = this.parent.performedType

                const isRequired =
                    context?.typeSwabBD &&
                    ATP_REQUIRED_TYPES.includes(context.typeSwabBD) &&
                    performedType === SwabCheckType.VISUAL

                if (!isRequired) return true

                return (value?.trim().length ?? 0) > 0
            }
        ),
})

export type UpdateSwabType = yup.InferType<typeof updateSwabSchema>