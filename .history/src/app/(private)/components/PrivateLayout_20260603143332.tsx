"use client";

import { useState } from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar, Header } from "@/app/(private)/components";
import { MobileSidebar } from "@/app/(private)/components/index";


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

    const withPage = desktopSidebarOpen ? "100"

    return (
        <Box bg="green">
            <Flex>
                {isMobile ? (
                    <MobileSidebar
                        open={mobileSidebarOpen}
                        onClose={() => setMobileSidebarOpen(false)}
                    />
                ) : (
                    <Sidebar open={desktopSidebarOpen} />
                )}

                <Box
                    flex={1}
                    bg={"pink"}
                    w={"100%"}
                >
                    <Header
                        sidebarOpen={sidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />

                    <Box
                        h="calc(100vh - 60px)"
                        py={2}
                        px={4}
                        bg={"red"}
                    >
                        {children}
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}