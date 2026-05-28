```tsx
"use client"

import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Heading,
  HStack,
} from "@chakra-ui/react"

import Link from "next/link"

export default function NotFound() {
  return (
    <Flex
      h="100vh"
      w="100%"
      align="center"
      justify="center"
      position="relative"
      overflow="hidden"
      bg="gray.50"
      px={6}
    >
      {/* background grid */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.06}
        pointerEvents="none"
        backgroundImage="
          linear-gradient(#000 1px, transparent 1px),
          linear-gradient(90deg, #000 1px, transparent 1px)
        "
        backgroundSize="40px 40px"
      />

      {/* glow left */}
      <Box
        position="absolute"
        top="-120px"
        left="-120px"
        w="350px"
        h="350px"
        bg="teal.300"
        filter="blur(120px)"
        opacity={0.25}
        borderRadius="full"
      />

      {/* glow right */}
      <Box
        position="absolute"
        bottom="-120px"
        right="-120px"
        w="350px"
        h="350px"
        bg="pink.300"
        filter="blur(120px)"
        opacity={0.25}
        borderRadius="full"
      />

      {/* MAIN */}
      <Flex
        w="full"
        maxW="1200px"
        justify="space-between"
        align="center"
        gap={10}
        flexWrap="wrap"
      >
        {/* LEFT */}
        <VStack align="start" gap={5} maxW="600px">
          {/* badge */}
          <HStack
            px={3}
            py={1}
            borderRadius="full"
            border="1px solid"
            borderColor="gray.200"
            bg="whiteAlpha.700"
            gap={2}
          >
            <Box w="8px" h="8px" borderRadius="full" bg="teal.400" />
            <Text fontSize="10px" letterSpacing="2px" fontWeight="bold">
              SWABSYS · STATUS 404
            </Text>
          </HStack>

          <Heading
            fontSize="9rem"
            lineHeight="1"
            bgGradient="linear(to-r, teal.400, pink.400)"
            bgClip="text"
            fontWeight="black"
          >
            404
          </Heading>

          <Heading size="lg">
            Amostra não localizada
          </Heading>

          <Text color="gray.600">
            Nenhum swab corresponde ao identificador informado no sistema interno.
            Verifique o registro ou retorne ao painel principal.
          </Text>

          <HStack gap={3}>
            <Button
              as={Link}
              href="/"
              bgGradient="linear(to-r, teal.400, pink.400)"
              color="white"
              _hover={{ opacity: 0.9 }}
              borderRadius="full"
            >
              Voltar ao painel
            </Button>

            <Button
              variant="outline"
              borderRadius="full"
              onClick={() => window.history.back()}
            >
              Nova consulta
            </Button>
          </HStack>

          {/* info box */}
          <Box
            mt={4}
            p={4}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.200"
            bg="whiteAlpha.700"
            fontFamily="mono"
            fontSize="12px"
            gap={2}
          >
            <Text>amostra_id: swab-4f2a9b</Text>
            <Text>rota: /404</Text>
            <Text color="pink.400">SWB_ERR_404</Text>
          </Box>
        </VStack>

        {/* RIGHT CARD */}
        <Box
          w="360px"
          p={5}
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          bg="whiteAlpha.700"
          boxShadow="lg"
        >
          <HStack justify="space-between" mb={4}>
            <Text fontSize="10px" fontWeight="bold">
              SWABSYS / CONSOLE
            </Text>

            <HStack gap={2}>
              <Box w="8px" h="8px" bg="pink.400" borderRadius="full" />
              <Text fontSize="10px">OFFLINE</Text>
            </HStack>
          </HStack>

          <VStack align="start" gap={2} fontFamily="mono" fontSize="12px">
            <Text>$ query --id /404</Text>
            <Text>→ buscando...</Text>
            <Text>→ 0 resultados</Text>
            <Text color="pink.400">✗ sample_not_found</Text>
            <Text>$ _</Text>
          </VStack>

          <HStack mt={5} gap={2}>
            <Box flex="1" textAlign="center" py={2} border="1px solid" borderColor="gray.200" borderRadius="md">
              H₂O
            </Box>
            <Box flex="1" textAlign="center" py={2} border="1px solid" borderColor="gray.200" borderRadius="md">
              DNA
            </Box>
            <Box flex="1" textAlign="center" py={2} border="1px solid" borderColor="gray.200" borderRadius="md">
              404
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  )
}

