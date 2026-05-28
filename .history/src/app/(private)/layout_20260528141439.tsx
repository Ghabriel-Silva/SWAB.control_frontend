"use client"

import { Box, Flex } from "@chakra-ui/react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box bg={"blue"}>
            <Box bg={"red "}>
                <Flex>Texto de testa para todas</Flex>
            </Box>
            <Box>
                {children}
            </Box>
        </Box>
    )
}