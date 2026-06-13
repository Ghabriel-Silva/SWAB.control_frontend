import { Button, CloseButton, Dialog, Portal, Badge, HStack, Flex, Icon } from "@chakra-ui/react"
import { MdOpenInNew } from "react-icons/md"
import { SubtitleText } from "@/app/(private)/components/index"
import { SwabGridRow } from "../../types/swab.data-grid"
import { BodyDialog } from "@/app/(private)/swab/components/index";
import { useState } from "react";
interface DialogContainerProps {
    row: SwabGridRow;
}

export function DialogContainer({ row }: DialogContainerProps) {
    const [isLoadingSwab, setIsLoadingSwab] = useState<boolean>(false)

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
                                    {row.lote}
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
                            <Dialog.Title>{row.lote}</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <BodyDialog row={row}  setIsLoadingFn={setIsLoadingSwab}/>
                        </Dialog.Body>
                        <Dialog.Footer display={isLoadingSwab ? 'none' : 'block'}>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline" colorPalette={"red"}>Cancelar</Button>
                            </Dialog.ActionTrigger>
                            <Button>Sa</Button>
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
