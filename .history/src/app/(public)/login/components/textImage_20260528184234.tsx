import { Text, Box } from "@chakra-ui/react"


export const TextImage = () => {
    return (
        <Box
            position="absolute"
            top="35%"
            left="10%"
            transform="translateY(-50%)"
            zIndex={2}
            color="#0F3D91"
            maxW="420px"
        >
            <Text
                fontSize={"4xl"}
                fontWeight="800"
                lineHeight="0.9"
                letterSpacing="-2px"
            >
                SWAB
            </Text>
            <Text
                fontSize={"2xl"}
                fontWeight="500"
                letterSpacing="12px"
                color="#5B9BEB"
                mt={2}
            >
                CONTROL
            </Text>

            <Box
                w="70px"
                h="4px"
                bg="#5B9BEB"
                mt={6}
                mb={4}
                borderRadius="full"
            />
            <Text
                fontSize={"md"}
                color="#1E3A5F"
                fontWeight="400"
                lineHeight="1.6"
            >
                Qualidade que se mede.
                <br />
                Segurança que se controla.
            </Text>
        </Box>
    )
}