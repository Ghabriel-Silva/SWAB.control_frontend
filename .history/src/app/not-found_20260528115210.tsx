"use client"

import {
    Box,
    Flex,
    Text,
    Button,
    VStack,
} from "@chakra-ui/react"

// SVG inline: placa de Petri com bactérias estilo científico
function PetriDishIllustration() {
    return (
        <Box as="svg" viewBox="0 0 520 520" w="340px" h="340px" aria-hidden>
            {/* Outer dish ring */}
            <circle cx="260" cy="260" r="230" fill="#f8f8f8" stroke="#1a1a2e" strokeWidth="3" />
            <circle cx="260" cy="260" r="220" fill="none" stroke="#1a1a2e" strokeWidth="1.2" opacity="0.3" />
            {/* Inner agar surface */}
            <circle cx="260" cy="260" r="215" fill="url(#agarGrad)" />

            <defs>
                <radialGradient id="agarGrad" cx="45%" cy="42%" r="60%">
                    <stop offset="0%" stopColor="#f0f4ff" />
                    <stop offset="100%" stopColor="#e8edf8" />
                </radialGradient>
            </defs>

            {/* Streaks — inoculation pattern diagonal */}
            {/* Primary streak lines — purple */}
            <g stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" opacity="0.85">
                <line x1="145" y1="155" x2="310" y2="155" />
                <line x1="145" y1="170" x2="305" y2="170" />
                <line x1="150" y1="185" x2="295" y2="185" />
                <line x1="155" y1="200" x2="285" y2="200" />
                <line x1="158" y1="215" x2="275" y2="215" />
            </g>
            {/* Secondary streak — blue-teal branching right */}
            <g stroke="#0891b2" strokeWidth="3" strokeLinecap="round" opacity="0.75" strokeDasharray="18 6">
                <line x1="290" y1="160" x2="370" y2="210" />
                <line x1="295" y1="175" x2="365" y2="220" />
                <line x1="285" y1="190" x2="355" y2="235" />
            </g>

            {/* Colonies — purple tones */}
            <circle cx="210" cy="300" r="18" fill="#7c3aed" opacity="0.7" />
            <circle cx="255" cy="320" r="22" fill="#6d28d9" opacity="0.65" />
            <circle cx="295" cy="305" r="14" fill="#8b5cf6" opacity="0.6" />
            <circle cx="235" cy="345" r="10" fill="#7c3aed" opacity="0.55" />
            <circle cx="280" cy="350" r="7" fill="#6d28d9" opacity="0.5" />
            <circle cx="315" cy="330" r="11" fill="#a78bfa" opacity="0.6" />
            <circle cx="190" cy="330" r="8" fill="#8b5cf6" opacity="0.5" />
            <circle cx="340" cy="295" r="6" fill="#7c3aed" opacity="0.45" />

            {/* Colonies — blue/cyan tones */}
            <circle cx="340" cy="340" r="19" fill="#0891b2" opacity="0.65" />
            <circle cx="375" cy="310" r="13" fill="#06b6d4" opacity="0.55" />
            <circle cx="365" cy="355" r="9" fill="#0e7490" opacity="0.5" />
            <circle cx="395" cy="340" r="6" fill="#22d3ee" opacity="0.45" />
            <circle cx="160" cy="290" r="6" fill="#38bdf8" opacity="0.45" />
            <circle cx="170" cy="355" r="8" fill="#0284c7" opacity="0.4" />

            {/* Small satellite dots */}
            <circle cx="222" cy="370" r="4" fill="#7c3aed" opacity="0.4" />
            <circle cx="260" cy="375" r="3" fill="#6d28d9" opacity="0.35" />
            <circle cx="300" cy="370" r="4" fill="#0891b2" opacity="0.35" />
            <circle cx="350" cy="365" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="180" cy="310" r="3" fill="#8b5cf6" opacity="0.35" />

            {/* Outer dish rim gloss */}
            <circle cx="260" cy="260" r="230" fill="none" stroke="#1a1a2e" strokeWidth="5" />
            <path d="M 100 170 A 220 220 0 0 1 420 170" fill="none" stroke="white" strokeWidth="3" opacity="0.3" />
        </Box>
    )
}

export default function NotFound() {
    return (
        <Flex
            minH="100vh"
            bg="white"
            align="center"
            justify="center"
            px={6}
        >
            <VStack gap={6} maxW="560px" w="full" textAlign="center">
                {/* Big title */}
                <Text
                    as="h1"
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontWeight="700"
                    lineHeight="1.1"
                    color="gray.900"
                    fontFamily="'Georgia', 'Times New Roman', serif"
                    letterSpacing="-1px"
                >
                    Perdemos essa amostra
                </Text>

                {/* Subtitle */}
                <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.500"
                    lineHeight="tall"
                    maxW="380px"
                >
                    Procuramos em todo o laboratório mas não encontramos o que você
                    está buscando. Vamos te levar a um lugar melhor.
                </Text>

                {/* CTA button */}
                <Button
                    size="md"
                    px={8}
                    py={6}
                    fontSize="sm"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    bg="teal.600"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "teal.700", transform: "translateY(-1px)" }}
                    transition="all 0.2s"
                >
                    Voltar ao painel
                </Button>

                {/* Illustration */}
                <Box mt={4}>
                    <PetriDishIllustration />
                </Box>

                {/* Decorative elements below — like Mailchimp */}
                <Box w="80px" h="2px" bg="gray.200" borderRadius="full" />
                <Text fontSize="xs" color="gray.300" letterSpacing="widest" textTransform="uppercase">
                    SWABSYS · ERRO 404
                </Text>
            </VStack>
        </Flex>
    )
}