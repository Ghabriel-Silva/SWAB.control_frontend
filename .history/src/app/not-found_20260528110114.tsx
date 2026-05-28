import { Link } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Text,
    VStack,
    HStack,
} from "@chakra-ui/react"

export function NotFoundSwabSystem() {
    const [sampleId, setSampleId] = useState("------")
    const [path, setPath] = useState("/unknown")

    useEffect(() => {
        setSampleId(Math.random().toString(36).slice(2, 8))
        setPath(window.location.pathname)
    }, [])

    return (
        <Flex
            minH="100vh"
            w="100%"
            position="relative"
            overflow="hidden"
            bg="gray.950"
            color="white"
            align="center"
            justify="center"
            px={6}
        >
            {/* Background grid */}
            <Box
                position="absolute"
                inset={0}
                opacity={0.05}
                pointerEvents="none"
                backgroundImage={`
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `}
                backgroundSize="44px 44px"
            />

            {/* Glow left */}
            <Box
                position="absolute"
                top="-120px"
                left="-120px"
                w="380px"
                h="380px"
                borderRadius="full"
                filter="blur(120px)"
                bg="teal.400"
                opacity={0.2}
            />

            {/* Glow right */}
            <Box
                position="absolute"
                bottom="-120px"
                right="-120px"
                w="380px"
                h="380px"
                borderRadius="full"
                filter="blur(120px)"
                bg="pink.400"
                opacity={0.2}
            />

            <Grid
                position="relative"
                zIndex={2}
                templateColumns={{ base: "1fr", md: "1fr 400px" }}
                gap={12}
                w="100%"
                maxW="1200px"
                alignItems="center"
            >
                {/* Left */}
                <Box textAlign={{ base: "center", md: "left" }}>
                    <HStack
                        display="inline-flex"
                        px={4}
                        py={2}
                        rounded="full"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        gap={2}
                    >
                        <Box w="8px" h="8px" rounded="full" bg="teal.300" />
                        <Text
                            fontSize="10px"
                            textTransform="uppercase"
                            letterSpacing="0.2em"
                            color="gray.300"
                            fontWeight="semibold"
                        >
                            SwabSys · Status 404
                        </Text>
                    </HStack>

                    <Heading
                        mt={6}
                        fontSize={{ base: "7rem", md: "10rem" }}
                        lineHeight="1"
                        bgGradient="linear(to-r, teal.300, pink.400)"
                        bgClip="text"
                        fontWeight="black"
                    >
                        404
                    </Heading>

                    <Heading
                        size="lg"
                        mt={2}
                        fontWeight="semibold"
                    >
                        Amostra não localizada
                    </Heading>

                    <Text
                        mt={4}
                        maxW="500px"
                        mx={{ base: "auto", md: 0 }}
                        color="gray.400"
                        fontSize={{ base: "sm", md: "md" }}
                    >
                        Nenhum swab corresponde ao identificador informado no sistema
                        interno. Verifique o registro ou retorne ao painel principal.
                    </Text>

                    <Flex
                        mt={8}
                        gap={3}
                        wrap="wrap"
                        justify={{ base: "center", md: "flex-start" }}
                    >
                        <Button
                            as={Link}
                          
                            size="md"
                            rounded="full"
                            bgGradient="linear(to-r, teal.300, pink.400)"
                            color="black"
                            _hover={{
                                transform: "translateY(-2px)",
                                opacity: 0.9,
                            }}
                        >
                            ← Voltar ao painel
                        </Button>

                        <Button
                            variant="outline"
                            rounded="full"
                            borderColor="whiteAlpha.300"
                            color="white"
                            bg="whiteAlpha.100"
                            _hover={{
                                bg: "whiteAlpha.200",
                            }}
                            onClick={() => window.history.back()}
                        >
                            Nova consulta
                        </Button>
                    </Flex>

                    {/* Mock register */}
                    <Box
                        mt={8}
                        display="inline-block"
                        textAlign="left"
                        px={4}
                        py={3}
                        rounded="xl"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        bg="whiteAlpha.100"
                        backdropFilter="blur(12px)"
                        fontFamily="mono"
                        fontSize="11px"
                        color="gray.400"
                    >
                        <Text>
                            <Text as="span" color="white">
                                amostra_id:
                            </Text>{" "}
                            swab-{sampleId}
                        </Text>

                        <Text mt={1}>
                            <Text as="span" color="white">
                                rota:
                            </Text>{" "}
                            {path}
                        </Text>

                        <Text mt={1}>
                            <Text as="span" color="white">
                                código:
                            </Text>{" "}
                            <Text as="span" color="pink.300">
                                SWB_ERR_404
                            </Text>
                        </Text>
                    </Box>
                </Box>

                {/* Right card */}
                <Box
                    rounded="2xl"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    bg="whiteAlpha.100"
                    backdropFilter="blur(14px)"
                    p={5}
                    shadow="2xl"
                >
                    <Flex
                        justify="space-between"
                        align="center"
                        borderBottom="1px solid"
                        borderColor="whiteAlpha.200"
                        pb={3}
                        fontSize="10px"
                        fontFamily="mono"
                        textTransform="uppercase"
                        letterSpacing="0.15em"
                        color="gray.400"
                    >
                        <Text>SwabSys / Console</Text>

                        <HStack spacing={2}>
                            <Box
                                w="7px"
                                h="7px"
                                rounded="full"
                                bg="pink.400"
                                animation="pulse 1.5s infinite"
                            />
                            <Text>offline</Text>
                        </HStack>
                    </Flex>

                    <VStack
                        align="start"
                        spacing={2}
                        mt={4}
                        fontFamily="mono"
                        fontSize="xs"
                    >
                        <Text color="gray.400">
                            <Text as="span" color="teal.300">
                                $
                            </Text>{" "}
                            query --id {path}
                        </Text>

                        <Text color="gray.500">
                            → buscando no registro…
                        </Text>

                        <Text color="gray.500">
                            → 0 resultados encontrados
                        </Text>

                        <Text color="pink.300">
                            ✗ ERROR: sample_not_found
                        </Text>

                        <Text color="gray.400">
                            <Text as="span" color="teal.300">
                                $
                            </Text>{" "}
                            ▋
                        </Text>
                    </VStack>

                    <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={5}>
                        {["H₂O", "DNA", "404"].map((label) => (
                            <Flex
                                key={label}
                                justify="center"
                                align="center"
                                py={2}
                                rounded="md"
                                border="1px solid"
                                borderColor="whiteAlpha.200"
                                bg="blackAlpha.300"
                                fontSize="10px"
                                fontFamily="mono"
                                textTransform="uppercase"
                                letterSpacing="0.15em"
                                color="gray.400"
                            >
                                {label}
                            </Flex>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Flex>
    )
}