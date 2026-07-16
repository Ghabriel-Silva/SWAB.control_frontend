'use client'

import { useAuth } from "@/permissions/auth-provider";
import { VStack, Flex, Text, Icon } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { useEffect, useMemo, useState } from "react";
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

const STORAGE_KEY = "nav-tree-expanded";

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

// acha os ids dos pais (branches) do nó cujo href bate com a rota atual
function findAncestorIds(
    nodes: RoutesNavType[],
    targetHref: string,
    trail: string[] = []
): string[] | null {
    for (const node of nodes) {
        if (node.href && `/${node.href}` === targetHref) {
            return trail;
        }
        if (node.children) {
            const found = findAncestorIds(node.children, targetHref, [...trail, node.id]);
            if (found) return found;
        }
    }
    return null;
}

export function NavRoutes({ onNavigate }: NavRoutesProps) {
    const { role } = useAuth();
    const pathName = usePathname();
    const [expandedValue, setExpandedValue] = useState<string[]>([]);

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

    // carrega estado salvo do localStorage + garante que o branch da rota ativa esteja aberto
    useEffect(() => {
        let stored: string[] = [];
        try {
            stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
        } catch {
            stored = [];
        }

        const activeAncestors =
            findAncestorIds(collection.rootNode.children ?? [], pathName) ?? [];

        const merged = Array.from(new Set([...stored, ...activeAncestors]));
        setExpandedValue(merged);
    }, [pathName, collection]);

    const handleExpandedChange = (details: { expandedValue: string[] }) => {
        setExpandedValue(details.expandedValue);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(details.expandedValue));
    };

    return (
        <VStack py={4} gap={1} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" px={3}>
            <Text w="100%" fontSize="11px" fontWeight="medium" color="whiteAlpha.600" pb={2}>
                MENU
            </Text>

            <VStack pt={5}>
                <TreeView.Root
                    collection={collection}
                    expandedValue={expandedValue}
                    onExpandedChange={handleExpandedChange}
                >
                    <TreeView.Tree>
                        <TreeView.Node
                            render={({ node, nodeState }) => {
                                const nodeHref = node.href ? `/${node.href}` : undefined;
                                const isActive = !!nodeHref && pathName === nodeHref;

                                if (nodeState.isBranch) {
                                    return (
                                        <TreeView.BranchControl
                                            asChild
                                            css={{
                                                bg: "transparent !important",
                                                _hover: { bg: "#1C2F4A !important" },
                                                _focus: { bg: "transparent !important" },
                                                _focusVisible: {
                                                    boxShadow: "none !important",
                                                    outline: "none !important",
                                                },
                                            }}
                                        >
                                            <Flex
                                                w="230px"
                                                align="center"
                                                gap="3"
                                                p="2"
                                                borderRadius="md"
                                                cursor="pointer"
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
                                    <TreeView.Item
                                        asChild
                                        onClick={() => onNavigate?.()}
                                        css={{
                                            bg: "transparent !important",
                                            _hover: { bg: "#1C2F4A !important" },
                                            _focus: { bg: "transparent !important" },
                                            _focusVisible: {
                                                boxShadow: "none !important",
                                                outline: "none !important",
                                            },
                                        }}
                                    >
                                        <NextLink href={nodeHref ?? "#"} style={{ textDecoration: "none" }}>
                                            <Flex
                                                w="230px"
                                                align="center"
                                                gap="3"
                                                p="2"
                                                borderRadius="md"
                                                cursor="pointer"
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