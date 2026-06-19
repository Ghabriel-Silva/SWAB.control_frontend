import {
    Button,
    Icon,
    InputGroup,
    Popover,
    Portal,
    Span,
    Textarea,
} from "@chakra-ui/react"
import { useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";

const MAX_CHARACTERS = 250

export const SameFauceteJustification = () => {
    const [value, setValue] = useState("")

    return (
        <Popover.Root>
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
                            <InputGroup
                                startElement={
                                    <Span color="fg.muted" textStyle="xs">
                                        {value.length} / {MAX_CHARACTERS}
                                    </Span>
                                }
                            >
                                <Textarea
                                    placeholder="Escreva a justificativa"
                                    value={value}
                                    maxLength={MAX_CHARACTERS}
                                    onChange={(e) => {
                                        setValue(e.currentTarget.value.slice(0, MAX_CHARACTERS))
                                    }}
                                />
                            </InputGroup>
                        </Popover.Body>
                        <Popover.CloseTrigger />
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
