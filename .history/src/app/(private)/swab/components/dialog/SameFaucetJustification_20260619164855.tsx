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

const MAX_CHARACTERS = 250

export const SameFauceteJustification = () => {
    const { register, formState } = useFormContext<UpdateSwabType>()
    const [value, setValue] = useState("")

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
                            <FormField isRequired error={formState.errors.sameFaucetJustification?.message}>
                                <Controller
                                    name="sameFaucetJustification"
                                    render={({ field }) => (
                                        <>
                                            <Textarea
                                                {...field}
                                                maxLength={MAX_CHARACTERS}
                                            />
                                            <Span>
                                                {field.value?.length || 0} / {MAX_CHARACTERS}
                                            </Span>
                                        </>
                                    )}
                                />
                            </FormField>

                        </Popover.Body>
                        <Popover.CloseTrigger />
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
