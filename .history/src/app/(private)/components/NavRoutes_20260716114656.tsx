import { useAuth } from "@/permissions/auth-provider";
import { VStack, Flex, Text, Icon } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { useMemo } from "react";
import { items } from "../utils/routesNav";
import { BodyText } from "@/app/(private)/components/index";
import { textColorNav } from "../styles/clenLink";
import { TreeView, createTreeCollection } from "@chakra-ui/react";
import { LuChevronRight, LuExternalLink, LuFile } from "react-icons/lu";
import { RoutesNavType } from "../types/routes";
import { Role } from "@/permissions/roles";

interface NavRoutesProps {
    onNavigate?: () => void;
}

// filtra recursivamente por role, removendo branches que ficaram sem filhos
function filterNodesByRole(
    nodes: RoutesNavType[] = [],
    role?: Role
): RoutesNavType[] {
    return nodes.reduce<RoutesNavType[]>((acc, node) => {
        if (node.children) {
            const children = filterNodesByRole(node.children, role);
            if (children.length > 0) {
                acc.push({ ...node, children });
            }
            return acc;
        }

        const hasAccess = !node.roles || (role && node.roles.includes(role));
        if (hasAccess) acc.push(node);
        return acc;
    }, []);
}

export function NavRoutes({ onNavigate }: NavRoutesProps) {
    const { role } = useAuth();
    const pathName = usePathname();

    const collection = useMemo(() => {
        const filteredChildren = filterNodesByRole(
            items.rootNode.children ?? [],
            role
        );

        return createTreeCollection<RoutesNavType>({
            nodeToValue: (node) => node.id,
            nodeToString: (node) => node.name,
            rootNode: {
                ...items.rootNode,
                children: filteredChildren,
            },
        });
    }, [role]);

    return (
        <VStack py={4} gap={1} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" px={3}>
            <Text w="100%" fontSize="11px" fontWeight="medium" color="whiteAlpha.600" pb={2}>
                MENU
            </Text>

            <VStack pt={5}>
                <TreeView.Root collection={collection}>
                    <TreeView.Tree>
                        <TreeView.Node
                            render={({ node, nodeState }) => {
                                const nodeHref = node.href ? `/${node.href}` : undefined;
                                const isActive = !!nodeHref && pathName === nodeHref;

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
                                        <NextLink href={nodeHref ?? "#"}>
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
                                                {nodeHref?.startsWith("http") && (
                                                    <LuExternalLink size={12} />
                                                )}
                                            </Flex>
                                        </NextLink>
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