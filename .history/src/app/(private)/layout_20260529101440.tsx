"use client"

import { Box, Flex, Icon, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false)
    const SIDEBAR_TRANSITION = "0.3s ease";
    const TRANSITION = "width 0.3s ease";
    return (
        <Box bg={"blue"} height={"100vh"} width={"100vw"}  >
            <Flex flexDirection={"row"}>
                <Box
                    bg={"red "}
                    w={collapsed ? "0px" : SIDEBAR_TRANSITION}
                    minW={collapsed ? "0px" : SIDEBAR_WIDTH}
                    overflow={"hidden"}          // ← aqui está a chave
                    transition={TRANSITION}
                    height={"100vh"}
                    flexShrink={0}
                    transition={`width ${SIDEBAR_TRANSITION}`}
                    height={"100vh"}
                >
                    <Flex>Texto de testa para todas</Flex>
                </Box>
                <Box bg={"green"} flex={1}>
                    <Stack bg={"pink"} height={"50px"}>
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
                        Apenas testnado
                    </Stack>
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}