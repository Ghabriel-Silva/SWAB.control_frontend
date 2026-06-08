import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"


export function DialogContainer() {
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

                                <TableText >
                                    {(order.id.length > 4
                                        ? order.id.slice(0, 4)
                                        : order.id) + " - "}
                                </TableText>
                            </HStack>

                            <TableText >
                                {new Date(order.created_at)
                                    .toLocaleString("pt-BR")
                                    .replace(",", " - ")}
                            </TableText>
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
