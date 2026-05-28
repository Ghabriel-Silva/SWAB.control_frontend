"use client"

import { Box, Flex, Heading, Button, Input, Text, Field, Stack, HStack, Link } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input"
import Image from "next/image";
import iconSwab from "@/assets/icon.png"
import { useForm } from "react-hook-form"
import { LoginType } from "./types/login.type";
import { loginService } from "./services/auth.service";
import { ResponseLogin } from "./types/reponse.login";
import { toaster } from "@/components/ui/toaster"
import { ResponseError } from "@/app/shared/types/error.response"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextImage } from "./components/textImage";
import { ImageLogin } from "./components/imageLogin";

export default function LoginPage() {
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


    const onSubmite = (data: LoginType) => {
        const response = loginService(data)
        setLoading(true)

        toaster.promise(response, {
            loading: {
                title: "Validando Login...",
                description: "Estamos validando o seu login aguarde"
            },
            success: (response: ResponseLogin) => {
                setLoading(false)
                setTimeout(() => {
                    router.push('/home')
                }, 0)
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
    }
    return (
        <Flex height={"100vh"} >
            <Box
                flex={{ base: 1, md: 1.5, lg: 2 }}
                display={{ base: "none", md: "block" }}
                overflow="hidden"
                position="relative"
            >
                <ImageLogin />
                <TextImage />
            </Box>
            <HStack flex={1} align="center" justify="center" p={10}>
             
            </HStack>
        </Flex>
    )
}