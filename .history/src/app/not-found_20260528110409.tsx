
"use client"

import { Link } from "@tanstack/react-router"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react"

export function NotFound() {
  return (
    <Flex
      minH="100vh"
      bg="gray.950"
      color="white"
      align="center"
      justify="center"
      position="relative"
      overflow="hidden"
    >
      {/* Glow */}
      <Box
        position="absolute"
        top="-100px"
        left="-100px"
        w="300px"
        h="300px"
        bg="teal.400"
        filter="blur(120px)"
        opacity={0.25}
        borderRadius="full"
      />

      <Box
        position="absolute"
        bottom="-100px"
        right="-100px"
        w="300px"
        h="300px"
        bg="pink.400"
        filter="blur(120px)"
        opacity={0.2}
        borderRadius="full"
      />

      <Container maxW="container.md">
        <VStack spacing={6} textAlign="center">
          <Heading
            fontSize={{ base: "7rem", md: "9rem" }}
            lineHeight="1"
            bgGradient="linear(to-r, teal.300, pink.400)"
            bgClip="text"
            fontWeight="black"
          >
            404
          </Heading>

          <Heading size="lg">
            Página não encontrada
          </Heading>

          <Text
            color="gray.400"
            maxW="500px"
            fontSize={{ base: "sm", md: "md" }}
          >
            A página que você tentou acessar não existe
            ou foi removida do sistema.
          </Text>

          <Flex gap={4} wrap="wrap" justify="center">
            <Button
              as={Link}
              to="/"
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

            <Button
              variant="outline"
              rounded="full"
              borderColor="whiteAlpha.300"
              _hover={{
                bg: "whiteAlpha.100",
              }}
              onClick={() => window.history.back()}
            >
              Voltar página
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Flex>
  )
}

