"use client";

import {
    Box,
    CloseButton,
    Drawer,
    Portal,
} from "@chakra-ui/react";

import { NavRoutes } from "./NavRoutes";

interface MobileSidebarProps {
    open: boolean;
    onClose: () => void;
}

export function MobileSidebar({
    open,
    onClose,
}: MobileSidebarProps) {
    return (
        <Drawer.Root
            placement="start"
            open={open}
            onOpenChange={(e) => {
                if (!e.open) {
                    onClose()
                }
            }}
        >
            <Portal>
                <Drawer.Backdrop />

                <Drawer.Positioner>
                    <Drawer.Content bg="#122136">
                        <Drawer.CloseTrigger asChild>
                            <CloseButton
                                position="absolute"
                                top={2}
                                right={4}
                                color="white"
                            />
                        </Drawer.CloseTrigger>
                        <Box pt={20}>
                            <NavRoutes onNavigate={onClose} />
                        </Box>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
}