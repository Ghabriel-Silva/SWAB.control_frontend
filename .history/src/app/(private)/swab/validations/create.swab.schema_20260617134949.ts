import * as yup from "yup"

export const createSwabSchema = yup.object({
    : yup
        .string()
        .required('O tank é obrigatório')
        .test(
            'unique',
            'Valores duplicados',
            (value) => {
                if (!value) return true;

                const tanks = value
                    .replace(/[.-]/g, ',')
                    .split(',')
                    .map(item => item.trim().toUpperCase())
                    .filter(Boolean);

                return new Set(tanks).size === tanks.length;
            }
        )

});
export type CreateSwabType = yup.InferType<typeof createSwabSchema>