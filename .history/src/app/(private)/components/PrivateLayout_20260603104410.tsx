"use client";

import { useState } from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar, Header } from "@/app/(private)/components/index";
import { MobileSidebar } from "./MobileSidebar";

export function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const isMobile = useBreakpointValue({
        base: true,
        md: false,
    });

    return (
        <Box>
            <Flex direction="row" >
                {/* Sidebar lateral */}

                {isMobile ? (
                    <MobileSidebar  />
                ) : (
                    <Sidebar open={sidebarOpen} />
                )}
                {/* Header e abaixo tem as page de rota o header é fixo*/}
                <Box flex={1}>
                    <Header
                        sidebarOpen={sidebarOpen}
                        toggleSidebar={() =>
                            setSidebarOpen(prev => !prev)
                        }
                    />
                    <Box h="calc(100vh - 60px)" py={2} px={4}>
                        {children}
                    </Box>
                </Box>
            </Flex >
        </Box >
    );
}