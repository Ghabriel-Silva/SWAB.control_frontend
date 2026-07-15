import { Button, CloseButton, Dialog, Portal, Badge, HStack, Flex, Icon } from "@chakra-ui/react"
import { MdOpenInNew } from "react-icons/md"
import { SubtitleText } from "@/app/(private)/components/index"
import { SwabGridRow } from "../../types/swab.data-grid"
import { BodyDialog } from "@/app/(private)/swab/components/index";
import { useRef, useState } from "react";
interface DialogContainerProps {
    row: SwabGridRow;
}

export function DialogContainer({ row }: DialogContainerProps) {
    const formRef = useRef<HTMLFormElement>(null)

    const [isLoadingSwab, setIsLoadingSwab] = useState<boolean>(false)
    const [open, setOpen] = useState(false)
    return (
        <Dialog.Root
            size={{ base: 'xs', sm: 'sm', md: 'lg', lg: 'lg' }}
            closeOnInteractOutside={false}
            open={open}
            onOpenChange={(details) => setOpen(details.open)}
        >
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
                        <Dialog.Body >
                            
                            <BodyDialog 
                            row={row} onSuccess={() => setOpen(false)}
                             setIsLoadingFn={setIsLoadingSwab} />
                        </Dialog.Body>

                        <Dialog.Footer display={isLoadingSwab ? 'none' : 'flex'}>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline" >Cancelar</Button>
                            </Dialog.ActionTrigger>
                            <Button
                                onClick={() => formRef.current?.requestSubmit()}
                            >Salvar</Button>
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
