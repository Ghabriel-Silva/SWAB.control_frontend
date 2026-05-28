"use client"

import { Box, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [slider, setSlider] = useState(false)
    return (
        <Box bg={"blue"}  height={"100vh"} width={"100vw"} overflow="hidden" >
            <Flex flexDirection={"row"}>
                <Box
                    bg={"red "}
                    w={slider ? "50px" : "200px"}
                    height={"100vh"}
                >
                    <Flex>Texto de testa para todas</Flex>
                </Box>
                <Box bg={"green"} flex={1}>
                    <Stack bg={"pink"} height={"50px"}>Apenas testnado </Stack>
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}