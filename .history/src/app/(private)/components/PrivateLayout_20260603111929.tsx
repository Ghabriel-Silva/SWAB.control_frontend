"use client";

import { useState } from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar, Header } from "@/app/(private)/components";
import { MobileSidebar } from "./MobileSidebar";


export function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const isMobile =
        useBreakpointValue({
            base: true,
            md: false,
        }) ?? false

    const sidebarOpen = isMobile
        ? mobileSidebarOpen
        : desktopSidebarOpen

    function toggleSidebar() {
        if (isMobile) {
            setMobileSidebarOpen(prev => !prev)
        } else {
            setDesktopSidebarOpen(prev => !prev)
        }
    }

    return (
        <Box>
            <Flex>
                {isMobile ? (
                    <MobileSidebar
                        open={mobileSidebarOpen}
                        onClose={() => setMobileSidebarOpen(false)}
                    />
                ) : (
                    <Sidebar open={desktopSidebarOpen} />
                )}

                <Box flex={1}>
                    <Header
                        sidebarOpen={sidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />

                    <Box
                        h="calc(100vh - 60px)"
                        py={2}
                        px={4}
                    >
                        {children}
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}