import {
    Button,
    Icon,
    InputGroup,
    Popover,
    Portal,
    Textarea,
} from "@chakra-ui/react"
import { RiEditBoxLine } from "react-icons/ri";

const MAX_CHARACTERES = 250

export const SameFauceteJustification = () => {

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
                            >
                            </InputGroup>
                            <Textarea />
                        </Popover.Body>
                        <Popover.CloseTrigger />
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
