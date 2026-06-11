import { Box, AbsoluteCenter, Spinner, Text, VStack, Portal } from "@chakra-ui/react";

export const FullScreenLoading = ({ message = "Carregando..." }) => {
    return (
        <Portal>
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                bg="blackAlpha.600"
                backdropFilter="blur(1px)" 
                zIndex="9999"
                pointerEvents="all"
            >
                <AbsoluteCenter>
                    <VStack
                        bg="bg.emphasized"
                        p="10"
                        rounded="xl"
                        shadow="2xl"
                        gap="4"
                        borderWidth="1px"
                    >
                        <Spinner size="md" />
                        <Text fontWeight="md" color="gray.700">
                            {message}
                        </Text>
                    </VStack>
                </AbsoluteCenter>
            </Box>
        </Portal>
    );
};