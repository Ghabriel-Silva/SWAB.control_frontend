"use client";

import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";


export function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Box h="100vh" w="100vw">
            <Flex direction="row">
                {/* Sidebar */}
                <Sidebar open={sidebarOpen} />

                {/* Conteúdo */}
                <Box flex={1}>
                    <Header
                        sidebarOpen={sidebarOpen}
                        toggleSidebar={() =>
                            setSidebarOpen(prev => !prev)
                        }
                    />

                    {children}
                </Box>
            </Flex>
        </Box>
    );
}