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
                        fontSize=""
                        color="#64748B"
                        textAlign="center"
                        maxW="500px"
                    >
                        A página que você está tentando acessar não existe,
                        foi removida ou o endereço informado está incorreto.
                    </Text>
                </VStack>

                <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    fontWeight="600"
                >
                    <NextLink href="/home">
                        Voltar para o início
                    </NextLink>
                </Button>
            </VStack>
        </Container>
    );
}  