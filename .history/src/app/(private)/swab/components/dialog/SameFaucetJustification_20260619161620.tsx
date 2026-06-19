import {
    Button,
    Icon,
    Popover,
    Portal,
    Textarea,
} from "@chakra-ui/react"
import { RiEditBoxLine } from "react-icons/ri";



export const SameFauceteJustification = () => {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button
                <Icon>
                    <RiEditBoxLine />
                </Icon>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content>
                        <Popover.Arrow />
                        <Popover.Body>
                            <Textarea />
                        </Popover.Body>
                        <Popover.CloseTrigger />
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
