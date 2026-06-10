import * as yup from "yup"

export const createSwabSchema = yup.object({
    tank: yup
        .string()
        .required('O tank é obrigatório')
        .test(
            'valid-tanks',
            'Precisa ter pelo menos um item',
            (value) => {
                if (!value) return false

                const items = value
                    .replace(/[.-]/g, ',')
                    .split(',')
                    .map(item => item.trim().toUpperCase())
                    .filter(Boolean)

                return items.length > 0
            }
        )
})

export type CreateSwabType = yup.InferType<typeof createSwabSchema>