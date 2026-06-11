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
        >
            {label && (
                <Field.Label f >
                    {label} <Field.RequiredIndicator />
                </Field.Label>
            )}
            {children}
            {error && <Field.ErrorText>{error}</Field.ErrorText>}
            {textHelper && <Field.HelperText>{textHelper}</Field.HelperText>}
        </Field.Root>
    )
}