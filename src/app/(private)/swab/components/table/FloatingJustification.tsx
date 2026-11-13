"use client"

import { SwabCheckResult } from "@/app/(private)/types/swab";
import {
    FloatingPanel,
    IconButton,
    Portal,
    Text,
} from "@chakra-ui/react"
import { LuGripHorizontal, LuX } from "react-icons/lu"
import { Tooltip } from "@/components/ui/tooltip"

interface PropsJustification {
    text: string,
    title: string,
    isPeding: SwabCheckResult,
    location: string,
    swabCancelled?: boolean
}
import { RiAlertFill } from "react-icons/ri";

export const FloatingJustification = ({ text, title, isPeding, location, swabCancelled }: PropsJustification) => {
    return (
        <>
            {isPeding === SwabCheckResult.PENDING && !!text && !swabCancelled && (
                <FloatingPanel.Root
                    resizable={false}
                    persistRect
                    defaultSize={{ width: 320, height: 200 }}
                >

                    <FloatingPanel.Trigger >
                        <IconButton
                            title={`Observação Ultima reprovação ${location}`}
                            variant="ghost"
                            colorPalette="yellow"
                            size="xs"
                        >
                            <RiAlertFill color="orange" size={'16px'} cursor={'pointer'} />
                        </IconButton>

                    </FloatingPanel.Trigger>
                    <Portal>
                        <FloatingPanel.Positioner>
                            <FloatingPanel.Content>
                                <FloatingPanel.Header>
                                    <FloatingPanel.DragTrigger>
                                        <LuGripHorizontal />
                                        <FloatingPanel.Title>
                                            <Text fontSize="xs">
                                                {title}
                                            </Text>
                                        </FloatingPanel.Title>
                                    </FloatingPanel.DragTrigger>
                                    <FloatingPanel.Control>
                                        <FloatingPanel.CloseTrigger asChild>
                                            <IconButton variant="ghost" size="2xs">
                                                <LuX />
                                            </IconButton>
                                        </FloatingPanel.CloseTrigger>
                                    </FloatingPanel.Control>
                                </FloatingPanel.Header>
                                <FloatingPanel.Body>
                                    <Text textStyle="xs">
                                        {text}
                                    </Text>
                                </FloatingPanel.Body>
                            </FloatingPanel.Content>
                        </FloatingPanel.Positioner>
                    </Portal>
                </FloatingPanel.Root>
            )}
        </>
    )

}
