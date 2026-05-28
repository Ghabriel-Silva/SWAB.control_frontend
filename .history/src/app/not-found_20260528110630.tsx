
"use client"

import Link from "next/link"
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react"

export default function NotFound() {
  return (
    <Flex
      minH="100vh"
      bg="gray.950"
      color="white"
      align="center"
      justify="center"
      px={6}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-100px"
        left="-100px"
        w="300px"
        h="300px"
        bg="teal.400"
        opacity={0.2}
        filter="blur(100px)"
        borderRadius="full"
      />

      <Box
        position="absolute"
        bottom="-100px"
        right="-100px"
        w="300px"
        h="300px"
        bg="pink.400"
        opacity={0.2}
        filter="blur(100px)"
        borderRadius="full"
      />

      <VStack spacing={5}>
        <Heading
          fontSize={{ base: "6rem", md: "9rem" }}
          bgGradient="linear(to-r, teal.300, pink.400)"
          bgClip="text"
          lineHeight="1"
        >
          404
        </Heading>

        <Heading size="lg">
          Página não encontrada
        </Heading>

        <Text color="gray.400" textAlign="center" maxW="400px">
          A página que você tentou acessar não existe
          ou foi removida.
        </Text>

        <Button
          as={Link}
          href="/"
          bgGradient="linear(to-r, teal.300, pink.400)"
          color="black"
          rounded="full"
          px={6}
          _hover={{
            opacity: 0.9,
          }}
        >
          Voltar ao início
        </Button>
      </VStack>
    </Flex>
  )
}

