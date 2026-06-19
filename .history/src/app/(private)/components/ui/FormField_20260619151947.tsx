import { Field, FieldItemProps } from "@chakra-ui/react"
import { SubtitleText, } from "@/app/(private)/components/index"
interface FormFieldProps {
    label?: string
    error?: string,
    children: React.ReactNode
    isRequired?: boolean
    textHelper?: string
    props?: FieldItemProps,
    IsDiplay?: boolean

}

//Componente Para padronizar input e mensagem de erro no formulario
export const FormField = ({ label, error, children, isRequired, textHelper, IsDiplay, props }: FormFieldProps) => {
    return (
        <Field.Root
            {...props}
            display={IsDiplay ? 'none' : 'block'}
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
            {textHelper && <Field.HelperText>{textHelper}</Field.HelperText>}
            {error && <Field.ErrorText>{error}</Field.ErrorText>}
        </Field.Root >
    )
}