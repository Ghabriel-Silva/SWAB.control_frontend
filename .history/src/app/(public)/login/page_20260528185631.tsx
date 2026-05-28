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