'use-client'

import { Box, Flex, HStack } from "@chakra-ui/react"
import Image from "next/image"

import imageSwab from "@/assets/img-swa.png"

export default function LoginPage() {
    return (
        <Flex height={"100vh"} bg={'green'}>
            <Box flex={2} bg={'pink'}>
                <Image
                    src={imageSwab}
                    alt="imagem conceitual de pessoa fazendo swab"
                    style={
                        
                    }
                />
            </Box>
            <HStack flex={1} bg={'blue'}>

            </HStack>

        </Flex>
    )
}