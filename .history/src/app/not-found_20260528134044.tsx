"use client"

import {
    Box,
    Flex,
    Text,
    Button,
    VStack,
} from "@chakra-ui/react"
import Image from "next/image"
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
            <VStack gap={4} maxW="680px" w="full" textAlign="center">

                <Box position="relative" w="full">
                    <Image
                        src={notFound}
                        priority
                        alt="404 - Página não encontrada"
                        style={{
                            mixBlendMode: "multiply",
                            width: "100%",
                        }}
                    />
                </Box>

                <Text
                    fontSize="sm"
                    color="gray.400"
                    lineHeight="tall"
                    maxW="360px"
                >
                    A página que você procura não existe ou foi movida.
                    Verifique o endereço ou volte ao início.
                </Text>

                <Button
                    size="sm"
                    px={6}
                    py={5}
                    fontSize="xs"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    bg="teal.600"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "teal.700", transform: "translateY(-1px)" }}
                    transition="all 0.2s"
                >
                    Voltar ao início
                </Button>

                <Text
                    fontSize="xs"
                    color="gray.500"
                    letterSpacing="widest"
                    textTransform="uppercase"
                    pt={1}
                >
                    SWABSYS · ERRO 404
                </Text>

            </VStack>
        </Flex>
    )
}