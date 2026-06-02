import { Heading, HStack , VStack, Text, Box} from "@chakra-ui/react";

export default function homePage() {

    return (
        <HStack h={"100%"} gap={10}>
            <VStack flex={1}  h={"100%"} justifyContent={"center"} align={"start"}>
                <Heading fontSize={"4xl"} color={"fg"}>SWAB.Control</Heading>
                <Text>Controle de qualidade e monitoramento de swabs de forma simples e eficiente.</Text>
            </VStack>
            <Box flex={2}  h={"100%"}>
            <>OI</>
            </Box>
        </HStack>
    )
}