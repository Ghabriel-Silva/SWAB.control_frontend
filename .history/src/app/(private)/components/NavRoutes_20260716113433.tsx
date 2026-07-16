import { useAuth } from "@/permissions/auth-provider";
import { VStack, Flex, Text, Icon } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { items } from "../utils/routesNav";
import { BodyText } from "@/app/(private)/components/index";
import { textColorNav } from "../styles/clenLink";
import { TreeView } from "@chakra-ui/react";
import { LuChevronRight, LuExternalLink, LuFile } from "react-icons/lu";

interface NavRoutesProps {
    onNavigate?: () => void;
}

export function NavRoutes({ onNavigate }: NavRoutesProps) {
    const { role } = useAuth();

    const menuNavFilter = items.filter(item => {
        if (!item.roles) return true;
        return item.roles.includes(role!);
    });

    const pathName = usePathname();

    return (
        <VStack py={4} gap={1} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" px={3}>
            <Text w="100%" fontSize="11px" fontWeight="medium" color="whiteAlpha.600" pb={2}>
                MENU
            </Text>

            <VStack pt={5}>
                <TreeView.Root collection={menuNavFilter} maxW="2xs">
                    <TreeView.Tree>
                        <TreeView.Node
                            render={({ node, nodeState }) => {
                                const isActive = pathName === node.href;

                                if (nodeState.isBranch) {
                                    return (
                                        <TreeView.BranchControl asChild>
                                            <Flex
                                                w="230px"
                                                align="center"
                                                gap="3"
                                                p="2"
                                                borderRadius="md"
                                                cursor="pointer"
                                                bg={isActive ? "#1C2F4A" : "transparent"}
                                                _hover={{ bg: "#1C2F4A" }}
                                            >
                                                <Icon {...textColorNav(isActive)}>
                                                    {node.icon ?? <LuFile />}
                                                </Icon>
                                                <TreeView.BranchText asChild>
                                                    <BodyText {...textColorNav(isActive)} w="100%">
                                                        {node.name}
                                                    </BodyText>
                                                </TreeView.BranchText>
                                                <TreeView.BranchIndicator>
                                                    <LuChevronRight />
                                                </TreeView.BranchIndicator>
                                            </Flex>
                                        </TreeView.BranchControl>
                                    );
                                }

                                return (
                                    <TreeView.Item asChild onClick={() => onNavigate?.()}>
                                        <a href={node.href}>
                                            <Flex
                                                w="230px"
                                                align="center"
                                                gap="3"
                                                p="2"
                                                borderRadius="md"
                                                cursor="pointer"
                                                bg={isActive ? "#1C2F4A" : "transparent"}
                                                _hover={{ bg: "#1C2F4A" }}
                                            >
                                                <Icon {...textColorNav(isActive)}>
                                                    {node.icon ?? <LuFile />}
                                                </Icon>
                                                <TreeView.ItemText asChild>
                                                    <BodyText {...textColorNav(isActive)} w="100%">
                                                        {node.name}
                                                    </BodyText>
                                                </TreeView.ItemText>
                                                {node.href?.startsWith("http") && (
                                                    <LuExternalLink size={12} />
                                                )}
                                            </Flex>
                                        </a>
                                    </TreeView.Item>
                                );
                            }}
                        />
                    </TreeView.Tree>
                </TreeView.Root>
            </VStack>
        </VStack>
    );
}