
"use client"

import Link from "next/link"
import NextImage from "next/image"

import {
  Box,
  Text,
  Button,
  VStack,
  Heading,
} from "@chakra-ui/react"

import image from "@/assets/"
import styles from "@/styles/not-found.module.css"

export default function NotFound() {
  return (
    <Box
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      px={4}
    >
      <VStack
        gap={6}
        textAlign="center"
        maxW="600px"
        w="full"
        className={styles.fadeIn}
      >
        <Heading
          size="3xl"
          color="blue.600"
          fontWeight="extrabold"
          className={styles.float}
        >
          404
        </Heading>

        <Box
          w="100%"
          h="300px"
          position="relative"
          className={styles.float_slow}
        >
          <NextImage
            src={image}
            alt="Página não encontrada"
            fill
            priority
            style={{
              objectFit: "contain",
            }}
          />
        </Box>

        <Heading
          size="xl"
          color="gray.700"
          className={styles.fade_up}
        >
          Página não encontrada
        </Heading>

        <Text
          fontSize="lg"
          color="gray.600"
          className={styles.fade_up}
        >
          A página que você tentou acessar não existe
          ou foi movida.
        </Text>

        <Button
          as={Link}
          href="/orders"
          bg="blue.600"
          color="white"
          size="lg"
          borderRadius="lg"
          px={10}
          fontWeight="bold"
          className={styles.button_animate}
          _hover={{
            bg: "blue.700",
          }}
        >
          Voltar ao início
        </Button>
      </VStack>
    </Box>
  )
}
