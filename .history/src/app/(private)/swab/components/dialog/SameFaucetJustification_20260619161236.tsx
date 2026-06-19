import {
    Button,
    Field,
    Icon,
    Input,
    Popover,
    Portal,
    Stack,
    Textarea,
} from "@chakra-ui/react"
import { RiEditBoxLine } from "react-icons/ri";



export const SameFauceteJustification = () => {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                    <Icon >
                        <RiEditBoxLine />
                    </Icon>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content>
                        <Popover.Arrow />
                        <Popover.Body>
                            <Stack gap="4">
                                <Field.Root>
                                    <Field.Label>Width</Field.Label>
                                    <Input placeholder="40px" />
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>Height</Field.Label>
                                    <Input placeholder="32px" />
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>Comments</Field.Label>
                                    <Textarea placeholder="Start typing..." />
                                </Field.Root>
                            </Stack>
                        </Popover.Body>
                        <Popover.CloseTrigger />
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
