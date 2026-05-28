```tsx
"use client"

import Link from "next/link"
import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react"

export default function NotFound() {
  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      bg="gray.100"
      px={4}
    >
      <VStack spacing={4}>
        <Heading size="4xl" color="blue.500">
          404
        </Heading>

        <Heading size="md">
          Página não encontrada
        </Heading>

        <Text color="gray.600" textAlign="center">
          A página que você tentou acessar não existe.
        </Text>

        <Button
          as={Link}
          href="/"
          colorScheme="blue"
        >
          Voltar para início
        </Button>
      </VStack>
    </Flex>
  )
}
```
