import { Field, FieldItemProps, VStack } from "@chakra-ui/react"
import { SubtitleText, } from "@/app/(private)/components/index"
interface FormFieldProps {
    label?: string
    error?: string,
    children: React.ReactNode
    isRequired?: boolean
    textHelper?: string
    props?: FieldItemProps,
    IsDiplay?: boolean
    disabled?: boolean

}

//Componente Para padronizar input e mensagem de erro no formulario
export const FormField = ({ label, error, children, isRequired, textHelper, IsDiplay, disabled, props }: FormFieldProps) => {
    return (
        <Field.Root
            {...props}
            {...{ disabled }}
            css={{
                "& :is(input, textarea, select, button):is(:disabled, [data-disabled], [aria-disabled='true'])": {
                    opacity: 0.9,
                    color: "fg",
                    bg: "bg.muted",
                },
            }}
            display={IsDiplay ? 'none' : 'block'}
            required={isRequired}
            invalid={!!error
            }
        >
            {label && (
                <Field.Label _disabled={{ opacity: 1 }}>
                    <SubtitleText>
                        {label} <Field.RequiredIndicator />
                    </SubtitleText>
                </Field.Label>
            )}
            {children}
            <VStack alignItems={"start"}>
                {textHelper && <Field.HelperText>{textHelper}</Field.HelperText>}
                {error && <Field.ErrorText>{error}</Field.ErrorText>}
            </VStack>
        </Field.Root >
    )
}
