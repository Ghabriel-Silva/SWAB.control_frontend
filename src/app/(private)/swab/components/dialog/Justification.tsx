import {
    Button,
    Icon,
    Popover,
    Portal,
    Span,
    Textarea,
} from "@chakra-ui/react"
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import { RiEditBoxLine, RiErrorWarningLine } from "react-icons/ri";
import { updateSwabSchema, UpdateSwabType } from "../../validations/update.swab.schema";
import { FormField } from "@/app/(private)/components";
import { useEffect } from "react";
import { Tooltip } from "@/components/ui/tooltip"



const MAX_CHARACTERS = 250

type justification = 'sameFaucetJustification' | 'updateSwabJustification'
type valueToRevalidate = keyof UpdateSwabType
interface PropsJustification {
    disabled?: boolean
    valueJustification: justification
    inputRevalidate: valueToRevalidate
    textLabel: string
}
export const Justification = ({ valueJustification, inputRevalidate, textLabel, disabled = false }: PropsJustification) => {
    const { control, register, trigger } = useFormContext<UpdateSwabType>();

    const { errors } = useFormState({
        control,
        name: valueJustification
    })

    const value = useWatch({
        control,
        name: valueJustification,
    })

    const hasValue = !!value?.trim()


    useEffect(() => {
        if (!disabled) trigger(valueJustification)
    }, [trigger, valueJustification, value, disabled])

    return (
        <Popover.Root positioning={{ placement: "bottom-start" }}>
            <Popover.Trigger asChild>
                <Button disabled={disabled} variant={"outline"} size={"xs"}>
                    <Tooltip
                        content={
                            hasValue
                                ? "Editar justificativa"
                                : "Defina sua justificativa"
                        }
                    >
                        {!hasValue ? (
                            <Icon asChild size={"md"}>
                                < RiErrorWarningLine color="orange" />
                            </Icon>
                        ) :
                            (
                                <Icon asChild >
                                    <RiEditBoxLine color="green" />
                                </Icon>
                            )
                        }
                    </Tooltip>
                </Button>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content>
                        <Popover.Arrow />
                        <Popover.Body>
                            <FormField disabled={disabled}
                                label={textLabel}
                                error={errors?.[valueJustification]?.message}
                            >
                                <Textarea
                                    {...register(`${valueJustification}`, {
                                        deps: [inputRevalidate],
                                        setValueAs: (value: unknown) => updateSwabSchema.fields[valueJustification].cast(value)
                                    })}
                                    placeholder="Escreva a justificativa"
                                    maxLength={MAX_CHARACTERS}
                                />
                                <Span color="fg.muted" textStyle="xs" >
                                    {value?.length ?? 0} / {MAX_CHARACTERS}
                                </Span>
                            </FormField>
                        </Popover.Body>
                        <Popover.CloseTrigger />
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root >
    )
}
