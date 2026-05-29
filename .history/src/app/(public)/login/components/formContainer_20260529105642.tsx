
import { Box, Heading, Button, Input, Text, Field, Stack, HStack, Link } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input"
import Image from "next/image";
import iconSwab from "@/assets/icon.png"
import { useForm } from "react-hook-form"
import { toaster } from "@/components/ui/toaster"
import { ResponseError } from "@/app/shared/types/error.response"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginType } from "../types/login.type";
import { ResponseLogin } from "../types/reponse.login";
import { loginService } from "../services/auth.service";

export const FormContainer = () => {
    const [loading, setLoading] = useState(false)
    const message: string = "Olá! Preciso de ajuda para entrar no Sistema."
    const url: string =
        `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginType>()


    const onSubmite = async (data: LoginType) => {
        const response = loginService(data)
        setLoading(true)

        toaster.promise(response, {
            loading: {
                title: "Validando Login...",
                description: "Estamos validando o seu login aguarde"
            },
            success: (response: ResponseLogin) => {
                return {
                    title: 'Sucesso',
                    description: response.message || 'Login realizado com sucesso',
                    closable: true,
                    duration: 2000
                }
            },
            error: (err: unknown) => {
                const error = err as ResponseError
                setLoading(false)
                return {
                    title: 'Erro',
                    description: error.message,
                    closable: true,
                    duration: 2000
                }
            }
        })
        try {
            const res = await response
            localStorage.setItem('userName', res.data.userName)
            setTimeout(() => router.push('/home'), 0)
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }
    return (
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
            <form noValidate onSubmit={handleSubmit(onSubmite)}>
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
                    <Button
                        type="submit"
                        width="100%"
                        mt={4}
                        loading={loading}
                        loadingText="Validando  dados...">
                        Entrar
                    </Button>
                </Stack>
            </form>
            <Text textStyle="xs" textAlign="center">
                Dificuldades para acessar? Entre em{" "}
                <Link
                    variant="underline"
                    href={url}
                    colorPalette="teal"
                    target="_blank"
                >
                    Contato
                </Link>
            </Text>
        </Box>
    )
}