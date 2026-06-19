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

const MAX_CHARACTERES = 250

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
                                endElement={
                                    <Span color="fg.muted" textStyle="xs">
                                        {value.length} / {MAX_CHARACTERS}
                                    </Span>
                                }
                            >
                                <Textarea />
                            </InputGroup>
                        </Popover.Body>
                        <Popover.CloseTrigger />
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
