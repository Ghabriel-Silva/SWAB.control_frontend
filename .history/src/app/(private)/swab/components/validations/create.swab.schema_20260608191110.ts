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
            return originalValue;
        })
        .of(
            yup.string().required()
        )
        .min(0, 'Precisa ter pelo menos um item')
        .test(
            'unique',
            'Valores duplicados',
            (value) => {
                if (!value) return true

                return new Set(value).size === value.length;
            }

        ),
      
});
export type CreateSwabType = yup.InferType<typeof createSwabSchema>