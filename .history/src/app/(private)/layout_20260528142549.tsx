"use client"

import { Box, Flex } from "@chakra-ui/react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box bg={"blue"} >
            <Flex flexDirection={"row"}>
                <Box bg={"red "}  >
                    <Flex>Texto de testa para todas</Flex>
                </Box>
                <Box bg={"green"} flex={1} overflowY="auto" py={6} >
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}