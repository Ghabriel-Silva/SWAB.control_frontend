"use client"

import { Box, Flex, Icon, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [slider, setSlider] = useState(false)
    const SIDEBAR_TRANSITION = "0.3s ease";
    const userName = localStorage.getItem('userName')

    return (
        <Box bg={"blue"} height={"100vh"} width={"100vw"}  >
            <Flex flexDirection={"row"}>
                <Box
                    bg={"red "}
                    w={slider ? "0px" : "200px"}
                    transition={`width ${SIDEBAR_TRANSITION}`}
                    height={"100vh"}
                    overflow={"hidden"}
                    flexShrink={0}
                >
                    <Box w={"200px"}>
                        <Flex>Texto de testa para todas</Flex>
                    </Box>
                </Box>
                <Box bg={"green"} flex={1}>
                    <HStack
                        bg={"pink"}
                        height={"50px"}
                        p={4}
                    >
                        <Icon
                            cursor={"e-resize"}
                            onClick={() => setSlider(prev => !prev)}
                            color="fg.muted"
                            _hover={{ color: "accent.fg" }}
                            transition="color 0.2s ease, transform 0.3s ease"
                            transform={slider ? "rotate(180deg)" : "rotate(0)"}
                        >
                            <BsLayoutSidebarInset />
                        </Icon>
                        {userName}
                    </HStack>
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}