"use client"

import { Box, Flex, Icon, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false)
    const SIDEBAR_WIDTH = "200px";
    const TRANSITION = "width 0.3s ease";
    return (
        <Box bg={"blue"} height={"100vh"} width={"100vw"}  >
            <Flex flexDirection={"row"}>
                <Box
                    bg={"red "}
                    w={collapsed ? "0px" : SLI}
                    minW={collapsed ? "0px" : SIDEBAR_WIDTH}
                    overflow={"hidden"}
                    transition={TRANSITION}
                    height={"100vh"}
                    flexShrink={0}
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