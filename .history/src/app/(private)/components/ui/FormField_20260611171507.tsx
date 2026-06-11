import { Field } from "@chakra-ui/react"
interface FormFieldProps {
    label?: string
    error?: string,
    children: React.ReactNode
    isRequired?: boolean
    textHelper?: string
}

//Componente Para padronizar input e mensagem de erro no formulario
export const FormField = ({ label, error, children, isRequired, textHelper }: FormFieldProps) => {
    return (
        <Field.Root
            required={isRequired}
            invalid={!!error}
            flex={fullWidth ? "0 0 100%" : "1"} //Força ocupar a linha interira ou dividir espaço se false
            minW={fullWidth ? "100%" : "200px"}
        >
            {label && (
                <Field.Label color={ColorLabel} fontSize={fontSizeTitleLabel} >
                    {label} <Field.RequiredIndicator />
                </Field.Label>
            )}
            {children}
            {error && <Field.ErrorText>{error}</Field.ErrorText>}
            {textHelper && <Field.HelperText>{textHelper}</Field.HelperText>}
        </Field.Root>
    )
}