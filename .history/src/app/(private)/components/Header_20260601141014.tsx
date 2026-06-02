"use client";

import { Box, Icon, HStack, Text, Button } from "@chakra-ui/react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { SubtitleText } from "@/app/(private)/components";
import { useAuth } from "@/permissions/auth-provider";
import { Can } from "@/permissions/can";
import { Role } from "@/permissions/roles";
import { getInitials } from "../swab/utils/getInitials";

interface HeaderProps {
    sidebarOpen: boolean;
    toggleSidebar: () => void
}

export function Header({
    sidebarOpen,
    toggleSidebar,
}: HeaderProps) {
    const user = useAuth()
    const userName = user.user?.userName ?? "USUÁRIO"

    return (
        <HStack
            borderBottom="black"
            height="60px"
            p={6}
            borderBottomWidth="1px"
            borderBottomStyle="solid"
            borderBottomColor="gray.muted"
            gap={6}
        >
            <Icon
                cursor="e-resize"
                onClick={toggleSidebar}
                color="fg.muted"
                _hover={{ color: "accent.fg" }}
                transition="color 0.2s ease, transform 0.3s ease"
                transform={
                    sidebarOpen
                        ? "rotate(0deg)"
                        : "rotate(180deg)"
                }
            >
                <BsLayoutSidebarInset />
            </Icon>

            <Text color="fg.subtle">|</Text>

            <SubtitleText>
                {getInitials(userName)}
            </SubtitleText>

            <Text color="fg.subtle">—</Text>

            <SubtitleText>
                {userName}
            </SubtitleText>

            <Box>
                <Can roleUser={Role.LAB} >
                    {(hasPermission) => {
                        <Button colorPalette="red" >
                            Apenas lab vê isso
                        </Button>
                    }}
                </Can>

                <Can roleUser={Role.ADMIN} >
                    <Button colorPalette="green">
                        Apenas Admin vê esse botão
                    </Button>
                </Can>
            </Box>
        </HStack>
    )
}