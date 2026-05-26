'use-client'

import { Box, Flex, Heading, Button, Input, Text, Field, Stack, HStack } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input"
import Image from "next/image";
import imageSwab from "@/assets/swab-img.png"

export default function LoginPage() {
    return (
        <Flex height={"100vh"} bg={'green'}>
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

                        objectFit: 'cover'
                    }}
                />
            </Box>
            <HStack flex={1} bg={'blue'}>
                <Box w="full" maxW="md">
                    <Heading size="4xl" color="red.solid" mb={4} textAlign="center">
                        Easy Food
                    </Heading>
                    <Heading size="2xl" mb={6} textAlign="center">
                        Login
                    </Heading>
                    <form  >
                        <Stack mb={2} >
                            <Box mb={4}>
                                <Field.Root invalid={!!errors.email}>
                                    <Field.Label>
                                        Email <Field.RequiredIndicator />
                                    </Field.Label>
                                    <Input placeholder="me@gmail.com" {...register("email", {
                                        required: "O e-mail é obrigatório.",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/,
                                            message: "Use um e-mail válido do Gmail ou Hotmail"
                                        }
                                    })} />
                                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                                    <Field.HelperText>Nunca compartilhe seu email.</Field.HelperText>
                                </Field.Root>
                            </Box>
                            <Box mb={4}>
                                <Field.Root invalid={!!errors.password}>
                                    <Field.Label>
                                        Senha <Field.RequiredIndicator />
                                    </Field.Label>
                                    <PasswordInput placeholder="@senha123"  {...register("password", {
                                        required: "A senha é obrigatória.",
                                        minLength: {
                                            value: 6,
                                            message: "A senha deve ter no mínimo 6 caracteres."
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "A senha deve ter no máximo 30 caracteres."
                                        }
                                    })} />
                                    <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                                </Field.Root>
                            </Box>
                            <Button type="submit" width="100%" colorScheme="orange" mt={4} loading={loading} loadingText="Validando  dados...">
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