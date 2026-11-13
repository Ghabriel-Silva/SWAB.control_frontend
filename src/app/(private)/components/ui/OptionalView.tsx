"use client";

import { Box, Button, Collapsible, useCollapsible } from "@chakra-ui/react";
import { useEffect, useEffectEvent, type ReactNode } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { SubtitleText } from "../text/SubtitleText";

interface OptionalViewProps {
    children: ReactNode;
    title?: string;
    defaultOpen?: boolean;
    alwaysOpen?: boolean;
}

export function OptionalView({
    children,
    title = "Detalhes",
    defaultOpen = false,
    alwaysOpen = false,
}: OptionalViewProps) {
    const collapsible = useCollapsible({
        defaultOpen,
        open: alwaysOpen ? true : undefined,
        disabled: alwaysOpen,
        lazyMount: false,
        unmountOnExit: false,
    });

    const syncDefaultOpen = useEffectEvent(() => {
        collapsible.setOpen(alwaysOpen || defaultOpen)
    })

    useEffect(() => {
        syncDefaultOpen();
    }, [defaultOpen, alwaysOpen])

    return (
        <Collapsible.RootProvider value={collapsible} w="100%">
            <Collapsible.Trigger asChild>
                <Button
                    type="button"
                    variant="plain"
                    size="xs"
                >
                    {collapsible.open
                        ? <FiChevronUp aria-hidden="true" />
                        : <FiChevronDown aria-hidden="true" />}
                    <SubtitleText as="span">{title}</SubtitleText>
                </Button>
            </Collapsible.Trigger>

            <Collapsible.Content>
                <Box>
                    {children}
                </Box>
            </Collapsible.Content>
        </Collapsible.RootProvider>
    );
}
