import {
    Box,
    Button,
    Icon,
    Popover,
    Portal,
    Span,
    Textarea,
} from "@chakra-ui/react"
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { RiEditBoxLine } from "react-icons/ri";
import { UpdateSwabType } from "../../validations/update.swab.schema";
import { FormField } from "@/app/(private)/components";
import { useFormState } from "react-dom";

const MAX_CHARACTERS = 250

export const SameFauceteJustification = () => {
    const {
        register,
        watch, 
        c
    } = useFormContext<UpdateSwabType>();
    const { errors } = useFormState({ control })
    const value = watch("sameFaucetJustification") || "";

    return (
        <Popover.Root positioning={{ placement: "bottom-start" }}>
            <Popover.Trigger asChild>
                <Button variant={"outline"} size={"xs"}>
                    <Icon asChild>
                        <RiEditBoxLine />
                    </Icon>
                </Button>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content>
                        <Popover.Arrow />
                        <Popover.Body>
                            <FormField isRequired error={errors.sameFaucetJustification?.message}>
                                <Textarea
                                    {...register('sameFaucetJustification')}
                                    placeholder="Escreva a justificativa"
                                    maxLength={MAX_CHARACTERS}

                                />
                                <Span color="fg.muted" textStyle="xs">
                                    {value.length} / {MAX_CHARACTERS}
                                </Span>
                            </FormField>

                        </Popover.Body>
                        <Popover.CloseTrigger />
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
