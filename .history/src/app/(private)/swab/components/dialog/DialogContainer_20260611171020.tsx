import { Button, CloseButton, Dialog, Portal, Badge, HStack, Flex, Icon } from "@chakra-ui/react"
import { MdOpenInNew } from "react-icons/md"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"
import { SubtitleText } from "@/app/(private)/components"
import { SwabGridRow } from "../../types/swab.data-grid"
interface DialogContainerProps {
    row: SwabGridRow;
}

export function DialogContainer({ }: SwabGridRow) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <HStack>
                    <Badge colorPalette="blue" variant="subtle">
                        <Flex
                            cursor="pointer"
                            align="center"
                            gap={1}
                            _hover={{ borderBottom: "1px solid" }}
                        >
                            <HStack gap={1}>

                                <Icon fontSize="sm">
                                    <MdOpenInNew />
                                </Icon>
                                <SubtitleText>
                                    {value.batch}
                                </SubtitleText>

                            </HStack>


                        </Flex>
                    </Badge>
                </HStack>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Dialog Title</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button>Save</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}
