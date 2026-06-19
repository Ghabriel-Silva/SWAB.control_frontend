import { Field, FieldItemProps} from "@chakra-ui/react"
import {  SubtitleText, } from "@/app/(private)/components/index"
interface FormFieldProps {
    label?: string
    error?: string,
    children: React.ReactNode
    isRequired?: boolean
    textHelper?: string
    widthParams?: boolean
    props?: FieldItemProps

}

//Componente Para padronizar input e mensagem de erro no formulario
export const FormField = ({ label, error, children, isRequired, textHelper,widthParams = true, props }: FormFieldProps) => {
    return (
        <Field.Root
            w={widthParams ? '100%' : 'auto'}
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