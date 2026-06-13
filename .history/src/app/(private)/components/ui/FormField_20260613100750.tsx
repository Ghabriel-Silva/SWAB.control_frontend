import { Field, FieldRootProps } from "@chakra-ui/react"
import { BodyText, SubtitleText, } from "@/app/(private)/components/index"
interface FormFieldProps {
    label?: string
    error?: string,
    children: React.ReactNode
    isRequired?: boolean
    textHelper?: string
    field?:FieldRootProps
}

//Componente Para padronizar input e mensagem de erro no formulario
export const FormField = ({ label, error, children, isRequired, textHelper, f }: FormFieldProps) => {
    return (
        <Field.Root
            required={isRequired}
            invalid={!!error}
        >
            {label && (
                <Field.Label>
                    <SubtitleText>
                        {label} <Field.RequiredIndicator />
                    </SubtitleText>
                </Field.Label>
            )}
            <BodyText>
                {children}
            </BodyText>
            {error && <Field.ErrorText>{error}</Field.ErrorText>}
            {textHelper && <Field.HelperText>{textHelper}</Field.HelperText>}
        </Field.Root>
    )
}