"use client";

import NextLink from "next/link";
import Image from "next/image";
import {
    Box,
    Button,
    Container,
    Text,
    VStack,
} from "@chakra-ui/react";
import notfound from "../assets/not-found.png"

export default function NotFoundPage() {
    return (
        <Container
            maxW="container.md"
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <VStack gap={6}>
                <Box>
                    <Image
                        src={notfound}
                        alt="Página não encontrada"
                        width={280}
                        priority
                    />
                </Box>

                <VStack gap={2}>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color="#1C2F4A"
                        textAlign="center"
                    >
                        Página não encontrada
                    </Text>

                    <Text
                        fontSize="md"
                        color="#7389a7"
                        textAlign="center"
                        maxW="500px"
                    >
                        A página que você está tentando acessar não existe,
                        foi removida ou o endereço informado está incorreto.
                    </Text>
                </VStack>
                <NextLink
                    href="/home"
                >
                    <Text
                        color="#64748B"
                        textDecor={"underline"}
                        _hover={{ textDecor: "none", color:'blue.'}}
                    >
                        Voltar para o início
                    </Text>
                </NextLink>
            </VStack>
        </Container >
    );
}  