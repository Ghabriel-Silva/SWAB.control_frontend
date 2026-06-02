import { Heading, HStack , VStack, Text, Box} from "@chakra-ui/react";

export default function homePage() {

    return (
        <HStack bg="pink" h={"100%"}>
            <VStack flex={1} bg={"green"} h={"100%"} justifyContent={""}>
                <Heading>SWAB.Control</Heading>
                <Text>Controle de qualidade e monitoramento de swabs de forma simples e eficiente.</Text>
            </VStack>
            <Box flex={2} bg={"blue"} h={"100%"}>
            <>OI</>
            </Box>
        </HStack>
    )
}