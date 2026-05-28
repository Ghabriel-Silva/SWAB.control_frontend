"use client"

import {
    Box,
    Flex,
    Text,
    Button,
    VStack,
    HStack,
    Badge,
    Code,
} from "@chakra-ui/react"

export default function NotFound() {
    return (
        <Flex
            h="100vh"
            w="100vw"
            align="center"
            justify="center"
            position="relative"
            overflow="hidden"
            bg="gray.50"
            px={8}
        >
            {/* Grid background */}
            <Box
                position="absolute"
                inset={0}
                backgroundImage="linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)"
                backgroundSize="32px 32px"
                zIndex={0}
            />

            {/* Gradient blobs */}
            <Box
                position="absolute"
                top={0}
                left={0}
                w="380px"
                h="380px"
                borderRadius="full"
                bg="linear-gradient(135deg, #2dd4bf44 0%, #10b98133 50%, transparent 100%)"
                filter="blur(60px)"
                zIndex={0}
            />
            <Box
                position="absolute"
                bottom={0}
                right={0}
                w="340px"
                h="340px"
                borderRadius="full"
                bg="linear-gradient(135deg, transparent 0%, #f472b633 50%, #ec489944 100%)"
                filter="blur(60px)"
                zIndex={0}
            />

            {/* Main content */}
            <Flex
                position="relative"
                zIndex={1}
                w="full"
                maxW="1100px"
                align="center"
                justify="space-between"
                gap={16}
                flexWrap="wrap"
            >
                {/* Left side */}
                <VStack align="flex-start" gap={6} flex={1} minW="300px">
                    {/* Status badge */}
                    <HStack gap={2}>
                        <Box w="8px" h="8px" borderRadius="full" bg="teal.500" />
                        <Text
                            fontSize="xs"
                            fontWeight="semibold"
                            letterSpacing="widest"
                            color="gray.500"
                            textTransform="uppercase"
                        >
                            SWABSYS · STATUS 404
                        </Text>
                    </HStack>

                    {/* 404 number */}
                    <Text
                        fontSize="160px"
                        fontWeight="900"
                        lineHeight="1"
                        letterSpacing="-6px"
                        bgGradient="linear(to-br, teal.500 30%, gray.400 70%)"
                        bgClip="text"
                        color="transparent"
                    >
                        404
                    </Text>

                    {/* Title */}
                    <Text fontSize="2xl" fontWeight="bold" color="gray.800" mt={-4}>
                        Amostra não localizada
                    </Text>

                    {/* Description */}
                    <Text fontSize="sm" color="gray.500" maxW="380px" lineHeight="tall">
                        Nenhum swab corresponde ao identificador informado no sistema
                        interno. Verifique o registro ou retorne ao painel principal.
                    </Text>

                    {/* Buttons */}
                    <HStack gap={3}>
                        <Button
                            size="md"
                            borderRadius="full"
                            px={6}
                            bgGradient="linear(to-r, teal.500, teal.700)"
                            color="white"
                            _hover={{ bgGradient: "linear(to-r, teal.600, teal.800)", transform: "translateY(-1px)" }}
                            transition="all 0.2s"
                        >
                            ← Voltar ao painel
                        </Button>
                        <Button
                            size="md"
                            borderRadius="full"
                            px={6}
                            variant="outline"
                            borderColor="gray.300"
                            color="gray.700"
                            _hover={{ bg: "gray.100", transform: "translateY(-1px)" }}
                            transition="all 0.2s"
                        >
                            Nova consulta
                        </Button>
                    </HStack>

                    {/* Debug info card */}
                    <Box
                        bg="white"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
                        px={5}
                        py={4}
                        shadow="sm"
                    >
                        <VStack align="flex-start" gap={1}>
                            <HStack gap={2}>
                                <Text fontSize="xs" color="gray.400" fontFamily="mono">amostra_id:</Text>
                                <Code fontSize="xs" colorScheme="gray">swab-v446ef</Code>
                            </HStack>
                            <HStack gap={2}>
                                <Text fontSize="xs" color="gray.400" fontFamily="mono">rota:</Text>
                                <Code fontSize="xs" colorScheme="gray">/404-swab-sys</Code>
                            </HStack>
                            <HStack gap={2}>
                                <Text fontSize="xs" color="gray.400" fontFamily="mono">código:</Text>
                                <Code fontSize="xs" colorScheme="pink">SWB_ERR_404</Code>
                            </HStack>
                        </VStack>
                    </Box>
                </VStack>

                {/* Right side — Console card */}
                <Box
                    bg="white"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="gray.200"
                    shadow="lg"
                    p={6}
                    w="320px"
                    flexShrink={0}
                >
                    {/* Console header */}
                    <Flex justify="space-between" align="center" mb={5}>
                        <Text fontSize="xs" fontWeight="semibold" letterSpacing="widest" color="gray.500" textTransform="uppercase">
                            SWABSYS / CONSOLE
                        </Text>
                        <HStack gap={1.5}>
                            <Box w="7px" h="7px" borderRadius="full" bg="red.400" />
                            <Text fontSize="xs" color="gray.400" fontWeight="medium">OFFLINE</Text>
                        </HStack>
                    </Flex>

                    {/* Terminal lines */}
                    <Box
                        fontFamily="mono"
                        fontSize="xs"
                        bg="gray.50"
                        borderRadius="lg"
                        p={4}
                        mb={5}
                    >
                        <VStack align="flex-start" gap={1.5}>
                            <HStack gap={2}>
                                <Text color="teal.500" fontWeight="bold">$</Text>
                                <Text color="gray.600">query --id /404-swab-sys</Text>
                            </HStack>
                            <HStack gap={2}>
                                <Text color="gray.400">→</Text>
                                <Text color="gray.500">buscando no registro…</Text>
                            </HStack>
                            <Box bg="gray.200" borderRadius="md" px={2} py={0.5}>
                                <HStack gap={2}>
                                    <Text color="teal.600" fontWeight="bold">+</Text>
                                    <Text color="gray.600">0 resultados encontrados</Text>
                                </HStack>
                            </Box>
                            <Box bg="red.50" borderRadius="md" px={2} py={0.5}>
                                <HStack gap={2}>
                                    <Text color="red.500" fontWeight="bold">X</Text>
                                    <Text color="red.500">ERROR: sample_not_found</Text>
                                </HStack>
                            </Box>
                            <HStack gap={2}>
                                <Text color="teal.500" fontWeight="bold">$</Text>
                                <Box w="2" h="3" bg="gray.400" borderRadius="sm" />
                            </HStack>
                        </VStack>
                    </Box>

                    {/* Badge row */}
                    <HStack gap={2} justify="center">
                        <Badge
                            borderRadius="md"
                            px={4}
                            py={2}
                            bg="white"
                            border="1px solid"
                            borderColor="gray.200"
                            color="gray.600"
                            fontSize="xs"
                            fontWeight="semibold"
                        >
                            H₂O
                        </Badge>
                        <Badge
                            borderRadius="md"
                            px={4}
                            py={2}
                            bg="white"
                            border="1px solid"
                            borderColor="gray.200"
                            color="gray.600"
                            fontSize="xs"
                            fontWeight="semibold"
                        >
                            DNA
                        </Badge>
                        <Badge
                            borderRadius="md"
                            px={4}
                            py={2}
                            bg="white"
                            border="1px solid"
                            borderColor="gray.200"
                            color="gray.600"
                            fontSize="xs"
                            fontWeight="semibold"
                        >
                            404
                        </Badge>
                    </HStack>
                </Box>
            </Flex>
        </Flex>
    )
}