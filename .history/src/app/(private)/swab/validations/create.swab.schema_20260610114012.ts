import * as yup from "yup"

export const createSwabSchema = yup.object({
    tank: yup
        .string()
    
        .of(
            yup.string()
        )
        .min(1, 'Precisa ter pelo menos um item')
        .test(
            'unique',
            'Valores duplicados',
            (value) => {
                if (!value) return true

                return new Set(value).size === value.length;
            }


        )
        .required('O tank é obrigatório'),

});
export type CreateSwabType = yup.InferType<typeof createSwabSchema>