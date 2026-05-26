'use-client'

import { Box, Flex, HStack } from "@chakra-ui/react"
import Image from "next/image"

import imageSwab from "@/assets/img-swa.png"

export default function LoginPage() {
    return (
        <Flex height={"100vh"} bg={'green'}>
            <Box
                flex={{ base: 1, md: 1.5, lg: 2 }}
                display={{ base: "none", md: "block" }}
                 backgroundPosition="right"
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

            </HStack>

        </Flex>
    )
}