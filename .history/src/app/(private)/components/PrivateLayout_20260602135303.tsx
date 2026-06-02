"use client";

import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar, Header } from "@/app/(private)/components/index";

export function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Box bg={"pink"}>
            <Flex direction="row">
                {/* Sidebar lateral */}
                <Sidebar open={sidebarOpen} />

                {/* Header e abaixo tem as page de rota o header é fixo*/}
                <Box flex={1}>
                    <Header
                        sidebarOpen={sidebarOpen}
                        toggleSidebar={() =>
                            setSidebarOpen(prev => !prev)
                        }
                    />
                    <Box h="calc(100vh - 60px)" bg={"red"} p={4}>
                        {children}
                    </Box>
                </Box>
            </Flex >
        </Box >
    );
}