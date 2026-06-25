import {
    Button,
    Icon,
    Popover,
    Portal,
    Span,
    Textarea,
} from "@chakra-ui/react"
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import { RiEditBoxLine } from "react-icons/ri";
import { UpdateSwabType } from "../../validations/update.swab.schema";
import { FormField } from "@/app/(private)/components";

const MAX_CHARACTERS = 250

type justification = 'sameFaucetJustification' | 'updateSwabJustification'
interface PropsJustification {
    valueJustification: justification
}
export const Justification = ({ valueJustification }: PropsJustification) => {
    const { control,
        register,
        formState: { errors }
    } = useFormContext<UpdateSwabType>();



    const value = useWatch({
        control,
        name: valueJustification,
        defaultValue: ""
    })

    return (
        <Popover.Root positioning={{ placement: "bottom-start" }}>
            <Popover.Trigger asChild>
                <Button variant={"outline"} size={"xs"}>
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
                            <FormField isRequired error={errors?.[va]?.message}>
                                <Textarea
                                    {...register(`${valueJustification}`)}
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
