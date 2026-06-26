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
import { UpdateSwabType } from "../../validations/update.swab.schema";
import { FormField } from "@/app/(private)/components";
import { useEffect } from "react";

const MAX_CHARACTERS = 250

type justification = 'sameFaucetJustification' | 'updateSwabJustification'
type valueToRevalidate = keyof UpdateSwabType
interface PropsJustification {
    valueJustification: justification
    inputRevalidate: valueToRevalidate
}
export const Justification = ({ valueJustification, inputRevalidate }: PropsJustification) => {
    const { control, register, trigger } = useFormContext<UpdateSwabType>();

    const { errors } = useFormState({
        control,
        name: valueJustification
    })

    const value = useWatch({
        control,
        name: valueJustification,
        defaultValue: ""
    })

    useEffect(() => {
        trigger(valueJustification)
    }, [])

    return (
        <Popover.Root positioning={{ placement: "bottom-start" }}>
            <Popover.Trigger asChild>
                <Button variant={"outline"} size={"xs"}>
                    {}
                    <Icon asChild>
                        <RiEditBoxLine color="green" />
                    </Icon>
                </Button>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content>
                        <Popover.Arrow />
                        <Popover.Body>
                            <FormField isRequired error={errors?.[valueJustification]?.message}>
                                <Textarea
                                    {...register(`${valueJustification}`, {
                                        deps: [inputRevalidate]
                                    })}
                                    placeholder="Escreva a justificativa"
                                    maxLength={MAX_CHARACTERS}
                                />
                                <Span color="fg.muted" textStyle="xs" >
                                    {value?.length ?? ''} / {MAX_CHARACTERS}
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
