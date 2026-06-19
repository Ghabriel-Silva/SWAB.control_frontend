import { Field, FieldItemProps } from "@chakra-ui/react"
import { SubtitleText, } from "@/app/(private)/components/index"
interface FormFieldProps {
    label?: string
    error?: string,
    children: React.ReactNode
    isRequired?: boolean
    textHelper?: string
    fullWidth?: boolean
    props?: FieldItemProps,

}

//Componente Para padronizar input e mensagem de erro no formulario
export const FormField = ({ label, error, children, isRequired, textHelper, fullWidth, props }: FormFieldProps) => {
    return (
        <Field.Root
            flex={fullWidth ? "0 0 100%" : "1"} //Força ocupar a linha interira ou dividir espaço se false
            bg={'blue'}
            {...props}
            required={isRequired}
            invalid={!!error
            }
        >
            {label && (
                <Field.Label>
                    <SubtitleText>
                        {label} <Field.RequiredIndicator />
                    </SubtitleText>
                </Field.Label>
            )}
            {children}
            {error && <Field.ErrorText>{error}</Field.ErrorText>}
            {textHelper && <Field.HelperText>{textHelper}</Field.HelperText>}
        </Field.Root >
    )
}