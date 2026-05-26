'use-client'

import { Box, Flex, Heading, Button, Input, Text, Field, Stack, HStack } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input"
import Image from "next/image";
import imageSwab from "@/assets/swab.png"
import iconSwab from "@/assets/icon.png"

export default function LoginPage() {
    return (
        <Flex height={"100vh"} >
            <Box
                flex={{ base: 1, md: 1.5, lg: 2 }}
                display={{ base: "none", md: "block" }}
                overflow="hidden"
            >
                <Image
                    src={imageSwab}
                    alt="imagem conceitual de pessoa fazendo swab"
                    style={{
                        height: '100vh',
                        objectFit: "cover",
                        objectPosition: "left center",
                    }}
                />
            </Box>
            <HStack flex={1} align="center" justify="center" p={10}>
                <Box w="full" maxW="md">
                    <HStack justifyContent={"center"} width={"100%"}>
                        <Image
                            src={iconSwab}
                            alt="logo swab control"
                            width={"90"}
                        />
                    </HStack>
                    <Heading size="2xl" mb={6} textAlign="center">
                        Login
                    </Heading>
                    <form >
                        <Stack mb={2} >
                            <Box mb={4}>
                                <Field.Root >
                                    <Field.Label>
                                        Email <Field.RequiredIndicator />
                                    </Field.Label>
                                    <Input placeholder="me@gmail.com" />
                                    <Field.ErrorText></Field.ErrorText>
                                    <Field.HelperText>Nunca compartilhe seu email.</Field.HelperText>
                                </Field.Root>
                            </Box>
                            <Box mb={4}>
                                <Field.Root >
                                    <Field.Label>
                                        Senha <Field.RequiredIndicator />
                                    </Field.Label>
                                    <PasswordInput placeholder="@senha123" />
                                    <Field.ErrorText></Field.ErrorText>
                                </Field.Root>
                            </Box>
                            <Button type="submit" width="100%" mt={4} loadingText="Validando  dados...">
                                Entrar
                            </Button>
                        </Stack>
                    </form>
                    <Text textStyle="xs" textAlign="center">
                        Dificuldades para acessar? Entre em{" "}
                    </Text>
                </Box>
            </HStack>

        </Flex>
    )
}