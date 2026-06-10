import * as yup from "yup"

export const createSwabSchema = yup.object({
    tank: yup
        .array()
        .transform((_, originalValue) => {
            if (typeof originalValue === 'string') {
                return originalValue
                    .replace(/[.-]/g, ',')
                    .split(',')
                    .map(item => item.trim().toUpperCase())
                    .filter(Boolean);
            }
            // Garante que sempre retornamos um array
            return Array.isArray(originalValue) ? originalValue : [];
        })
        .of(yup.string().required())
        .min(1, 'Precisa ter pelo menos um item') // ← min(1) para realmente exigir
        .test(
            'unique',
            'Valores duplicados',
            (value) => {
                if (!value) return true;
                return new Set(value).size === value.length;
            }
        )
        .required('O tank é obrigatório'),
});

export type CreateSwabType = yup.InferType<typeof createSwabSchema>