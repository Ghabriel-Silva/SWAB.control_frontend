"use client"

import { Box, Flex } from "@chakra-ui/react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box bg={"blue"} height={"100vh"}>
            <Box bg={"red "}>
                <Flex>Texto de testa para todas</Flex>
            </Box>
            <Box bg={"green"}>
                {children}
            </Box>
        </Box>
    )
}