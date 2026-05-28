"use client"

import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [slider, setSlider] = useState(false)
    return (
        <Box bg={"blue"}>
            <Flex flexDirection={"row"}>
                <Box
                    bg={"red "}
                    w={slider ? "50px" : "200px"}
                    height={"100vh"}
                >
                    <Flex>Texto de testa para todas</Flex>
                </Box>
                <Box bg={"green"} flex={1}  height={"100vh"} >
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}