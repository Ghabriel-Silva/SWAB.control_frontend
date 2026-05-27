"use client"

import { Box, Flex, Heading, Button, Input, Text, Field, Stack, HStack, Link } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input"
import Image from "next/image";
import imageSwab from "@/assets/swab.img.png"
import iconSwab from "@/assets/icon.png"
import { useForm } from "react-hook-form"
import { LoginType } from "./types/login.type";
import { loginService } from "./services/auth.service";
import { ResponseLogin } from "./types/reponse.login";
import { toaster } from "@/components/ui/toaster"
import { ResponseError } from "@/app/shared/types/error.response"


export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginType>()

    const onSubmite = (data: LoginType) => {
        const response = loginService(data)

        toaster.promise(response, {
            loading: { title: "Validando Login...", description: "Estamos validando o seu login aguarde" },
            success: (response: ResponseLogin) => {
                return {
                    title: '',
                    description: response.message || 'Login realizado com sucesso',
                    closable: true,
                    duration: 2000
                }
            },
            error: (err: unknown) => {
                const error = err as ResponseError
                return {
                    title:'Erro',
                    description: err.message
                }
            }
        })


    }


    return (
        <Flex height={"100vh"} >
            <Box
                flex={{ base: 1, md: 1.5, lg: 2 }}
                display={{ base: "none", md: "block" }}
                overflow="hidden"
                position="relative"
            >
                <Image
                    src={imageSwab}
                    alt="imagem conceitual de pessoa fazendo swab"
                    style={{
                        height: "100vh",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
                <Box
                    position="absolute"
                    top="35%"
                    left="10%"
                    transform="translateY(-50%)"
                    zIndex={2}
                    color="#0F3D91"
                    maxW="420px"
                >
                    <Text
                        fontSize={"4xl"}
                        fontWeight="800"
                        lineHeight="0.9"
                        letterSpacing="-2px"
                    >
                        SWAB
                    </Text>
                    <Text
                        fontSize={"2xl"}
                        fontWeight="500"
                        letterSpacing="12px"
                        color="#5B9BEB"
                        mt={2}
                    >
                        CONTROL
                    </Text>

                    <Box
                        w="70px"
                        h="4px"
                        bg="#5B9BEB"
                        mt={6}
                        mb={4}
                        borderRadius="full"
                    />
                    <Text
                        fontSize={"md"}
                        color="#1E3A5F"
                        fontWeight="400"
                        lineHeight="1.6"
                    >
                        Qualidade que se mede.
                        <br />
                        Segurança que se controla.
                    </Text>
                </Box>
            </Box>
            <HStack flex={1} align="center" justify="center" p={10}>
                <Box w="full" maxW="md">
                    <HStack justifyContent={"center"} width={"100%"}>
                        <Image
                            src={iconSwab}
                            alt="logo swab control"
                            width={"100"}
                        />
                    </HStack>
                    <Heading size="2xl" mb={6} textAlign="center">
                        Login
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmite)}>
                        <Stack mb={2} >
                            <Box mb={4}>
                                <Field.Root invalid={!!errors.email} required >
                                    <Field.Label>
                                        Email <Field.RequiredIndicator />
                                    </Field.Label>
                                    <Input placeholder="me@gmail.com" {...register('email', {
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
                                <Field.Root invalid={!!errors.password} required>
                                    <Field.Label>
                                        Senha <Field.RequiredIndicator />
                                    </Field.Label>
                                    <PasswordInput placeholder="@senha123" {...register("password", {
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
                            <Button type="submit" width="100%" mt={4} loadingText="Validando  dados...">
                                Entrar
                            </Button>
                        </Stack>
                    </form>
                    <Text textStyle="xs" textAlign="center">
                        Dificuldades para acessar? Entre em{" "}
                        <Link
                            variant="underline"
                            href={''}
                            colorPalette="teal"
                            target="_blank"
                        >
                            Contato
                        </Link>{" "}
                    </Text>
                </Box>
            </HStack>
        </Flex>
    )
}