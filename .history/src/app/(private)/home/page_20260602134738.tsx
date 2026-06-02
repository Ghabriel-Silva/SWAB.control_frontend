import { Heading, HStack , VStack, Text, Box} from "@chakra-ui/react";

export default function homePage() {

    return (
        <HStack >
            <VStack flex={1} bg={"grenn"}>
                <Heading>SWAB.Control</Heading>
                <Text>Controle de qualidade e monitoramento de swabs de forma simples e eficiente.</Text>
            </VStack>
            <Box flex={2} bg={"blue"} >
            <>OI</>
            </Box>
        </HStack>
    )
}