"use client";

import { useEffect, useState } from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar, Header } from "@/app/(private)/components";
import { MobileSidebar } from "./MobileSidebar";

export function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const isMobile =
        useBreakpointValue({
            base: true,
            md: false,
        }) ?? false;


    useEffect(() => {
        if (isMobile) {
            setSidebarOpen(false);
        }
    }, [isMobile]);
    return (
        <Box>
            <Flex>
                {isMobile ? (
                    <MobileSidebar
                        open={isMobile ? false : true}
                        onClose={() => setSidebarOpen(false)}
                    />
                ) : (
                    <Sidebar open={sidebarOpen} />
                )}

                <Box flex={1}>
                    <Header
                        sidebarOpen={sidebarOpen}
                        toggleSidebar={() =>
                            setSidebarOpen(prev => !prev)
                        }
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