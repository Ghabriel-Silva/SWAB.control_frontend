"use client"

import {
    Box,
    Flex,
    Text,
    Button,
    VStack,
    Heading,
} from "@chakra-ui/react"
import Image from "next/image"
import notFound from "@/assets/noutFound.png"
import Link from "next/link"

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
                <Heading fontSize={""}>
                    Ops! Página não encontrada.
                </Heading>

                <Text
                    fontSize="sm"
                    color="gray.600"
                    lineHeight="tall"
                    maxW="560px"
                >
                    Parece que a página que você procura não existe ou foi removida.
                    Você pode optar por voltar à página inicial no botão abaixo ou usar o menu.
                </Text>
                <Link
                    href={"/home"}
                >
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
                </Link>
                <Text
                    fontSize="xs"
                    color="gray.500"
                    letterSpacing="widest"
                    textTransform="uppercase"
                    pt={1}
                >
                    SWAB.control · ERRO 404
                </Text>

            </VStack>
        </Flex>
    )
}