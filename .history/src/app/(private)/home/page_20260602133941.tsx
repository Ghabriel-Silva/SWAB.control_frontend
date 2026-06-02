import { Heading, HStack , VStack, Text, Box} from "@chakra-ui/react";

export default function homePage() {

    return (
        <HStack >
            <VStack flex={1}>
                <Heading>SWAB.Control</Heading>
                <Text>Controle de qualidade e monitoramento de swabs de forma simples e eficiente.</Text>
            </VStack>
            <Box bg={"blue"}>

            </Box>
        </HStack>
    )
}