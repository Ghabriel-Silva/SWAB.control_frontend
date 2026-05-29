"use client"

import { Box, Flex, Icon, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false)
    const SIDEBAR_WIDTH = "200px";
    const TRANSITION = "width 0.3s ease";

    return (
        <Box bg={"blue"} height={"100vh"} width={"100vw"}>
            <Flex flexDirection={"row"} height={"100vh"}>
                <Box
                    bg={"red"}
                    w={collapsed ? "0px" : SIDEBAR_WIDTH}
                    minW={collapsed ? "0px" : SIDEBAR_WIDTH}
                    overflow={"hidden"}      
                    transition={TRANSITION}
                    height={"100vh"}
                    flexShrink={0}              
                >
                    <Box w={SIDEBAR_WIDTH}>     
                        <Flex>Texto de teste para todas</Flex>
                    </Box>
                </Box>

                <Box bg={"green"} flex={1} overflow={"hidden"}>
                    <Stack bg={"pink"} height={"50px"} direction={"row"} align={"center"}>
                        <Icon
                            cursor={"pointer"}
                            onClick={() => setCollapsed(prev => !prev)}
                            color="fg.muted"
                            _hover={{ color: "accent.fg" }}
                            transition="color 0.2s ease, transform 0.3s ease"
                            transform={collapsed ? "rotate(180deg)" : "rotate(0)"}
                        >
                            <BsLayoutSidebarInset />
                        </Icon>
                        Apenas testando
                    </Stack>
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}