"use client"

import { Box, Flex } from "@chakra-ui/react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Div></Div>
        <Box  bg={"blue"}>
            <Flex>Texto de testa para todas</Flex>
            <Box>
                {children}
            </Box>
        </Box>
    )
}