"use client";

import NextLink from "next/link";
import Image from "next/image";
import {Box,Container,Text,VStack} from "@chakra-ui/react";
import forbidden from "@/assets/forbien.png"

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
                        src={forbidden}
                        alt="Você não tem Autorização"
                        width={320}
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
                        Acesso negado
                    </Text>

                    <Text
                        fontSize="md"
                        color="#7389a7"
                        textAlign="center"
                        maxW="500px"
                    >
                        Você não possui permissão para acessar esta página.
                        Caso acredite que isso seja um erro, entre em contato com um administrador.
                    </Text>
                </VStack>
                <NextLink
                    href="/home"
                >
                    <Text
                        color="#7389a7"
                        textDecor={"underline"}
                        _hover={{ textDecor: "none", color: 'blue.500' }}
                    >
                        Voltar para o início
                    </Text>
                </NextLink>
            </VStack>
        </Container >
    );
}  