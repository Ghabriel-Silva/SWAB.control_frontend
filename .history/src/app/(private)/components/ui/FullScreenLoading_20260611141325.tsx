import { Box, AbsoluteCenter, Text, VStack, Portal } from "@chakra-ui/react";

const tubes = [
    { delay: "0s", color: "#2dd4bf", height: 55 },
    { delay: "0.3s", color: "#f472b6", height: 63 },
    { delay: "0.6s", color: "#fbbf24", height: 71 },
    { delay: "0.9s", color: "#60a5fa", height: 79 },
];

export const FullScreenLoading = ({ message = "Carregando..." }) => {
    return (
        <Portal>
            <style>{`
        ${tubes.map((_, i) => `
          @keyframes tubeFill_${i} {
            0%, 100% { height: ${i === 0 ? 30 : i === 1 ? 50 : i === 2 ? 20 : 40}%; }
            50%       { height: ${i === 0 ? 75 : i === 1 ? 85 : i === 2 ? 65 : 80}%; }
          }
        `).join("")}
        @keyframes bubbleUp {
          0%   { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-30px) scale(0.3); opacity: 0; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes textPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
      `}</style>

            <Box
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                bg="blackAlpha.600"
                backdropFilter="blur(1px)"
                zIndex="9999"
                pointerEvents="all"
            >
                <AbsoluteCenter>
                    <VStack
                        bg="bg.emphasized"
                        p="10"
                        rounded="xl"
                        shadow="2xl"
                        gap="4"
                        borderWidth="1px"
                    >
                        {/* Tubos */}
                        <Box display="flex" gap="12px" alignItems="flex-end">
                            {tubes.map((tube, i) => (
                                <Box
                                    key={i}
                                    position="relative"
                                    width="24px"
                                    height={`${tube.height}px`}
                                    borderRadius="0 0 9999px 9999px"
                                    border="2px solid rgba(0,0,0,0.15)"
                                    overflow="hidden"
                                    bg="rgba(255,255,255,0.08)"
                                >
                                    {/* Líquido */}
                                    <Box
                                        position="absolute"
                                        bottom="0"
                                        left="0"
                                        right="0"
                                        borderRadius="0 0 9999px 9999px"
                                        style={{
                                            background: tube.color,
                                            animation: `tubeFill_${i} 2s ease-in-out infinite ${tube.delay}`,
                                        }}
                                    />
                                    {/* Bolhinhas */}
                                    <Box
                                        position="absolute"
                                        bottom="8px"
                                        left="4px"
                                        width="4px"
                                        height="4px"
                                        borderRadius="full"
                                        bg="whiteAlpha.600"
                                        style={{ animation: `bubbleUp 1.5s ease-out infinite ${tube.delay}` }}
                                    />
                                    <Box
                                        position="absolute"
                                        bottom="12px"
                                        right="4px"
                                        width="2px"
                                        height="2px"
                                        borderRadius="full"
                                        bg="whiteAlpha.600"
                                        style={{
                                            animation: `bubbleUp 1.8s ease-out infinite`,
                                            animationDelay: `${parseFloat(tube.delay) + 0.4}s`,
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>

                        {/* Dots */}
                        <Box display="flex" gap="6px">
                            {[0, 0.2, 0.4].map((d, i) => (
                                <Box
                                    key={i}
                                    width="6px"
                                    height="6px"
                                    borderRadius="full"
                                    bg="blue.400"
                                    style={{ animation: `dotPulse 1.2s ease-in-out infinite ${d}s` }}
                                />
                            ))}
                        </Box>

                        {/* Texto */}
                        <Text
                            fontSize="10px"
                            fontWeight="semibold"
                            letterSpacing="widest"
                            textTransform="uppercase"
                            color="gray.500"
                            style={{ animation: "textPulse 2s ease-in-out infinite" }}
                        >
                            {message}
                        </Text>
                    </VStack>
                </AbsoluteCenter>
            </Box>
        </Portal>
    );
};