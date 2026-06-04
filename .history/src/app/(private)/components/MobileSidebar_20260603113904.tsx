"use client";

import {
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
                        <NavRoutes onNavigate={onClose} />
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
}