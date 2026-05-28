"use client"

import {
    Box,
    Flex,
    Text,
    Button,
    VStack,

} from "@chakra-ui/react"
import Image from "next/image";

import notFound from "@/assets/noutFound.png"

export default function NotFound() {
    return (
        <Flex
            minH="100vh"
            bg="white"
            align="center"
            justify="center"
            px={6}
        >
            <VStack gap={5} maxW="680px" w="full" textAlign="center">
                <Box position="relative" w="full" bg={"blue.300"}>
                    <Image
                        src={notFound}
                        alt="404 - Placa de Petri"
                        style={{
                            mixBlendMode: "multiply",
                            width: "100%",
                        }}
                    />
                </Box>

                <Text
                    as="h1"
                    fontSize={{ base: "3xl", md: "5xl" }}
                    fontWeight="700"
                    color="gray.900"
                    fontFamily="'Georgia', 'Times New Roman', serif"
                    letterSpacing="-1px"
                    lineHeight="1.15"
                >
                    Perdemos essa amostra
                </Text>

                {/* Subtitle */}
                <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.500"
                    lineHeight="tall"
                    maxW="400px"
                >
                    Procuramos em todo o laboratório mas não encontramos o que você
                    está buscando. Vamos te levar a um lugar melhor.
                </Text>
                <Button
                    size="md"
                    px={8}
                    py={6}
                    fontSize="sm"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    bg="teal.600"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "teal.700", transform: "translateY(-1px)" }}
                    transition="all 0.2s"
                >
                    Voltar ao painel
                </Button>
                <Text
                    fontSize="xs"
                    color="fg.warning"
                    letterSpacing="widest"
                    textTransform="uppercase"
                    pt={2}
                >
                    SWABSYS · ERRO 404
                </Text>
            </VStack>
        </Flex>
    )
}