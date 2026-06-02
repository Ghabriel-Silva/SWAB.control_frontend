import { Heading, HStack, VStack, Text, Box } from "@chakra-ui/react";
import { BodyText } from "@/app/(private)/components/";

export default function homePage() {

    return (
        <HStack h={"100%"} >
            <VStack flex={1} h={"100%"} justifyContent={"center"} align={"start"} gap={6}>
                <Heading fontSize={"4xl"} color={"fg"}>SWAB.Control</Heading>
                <BodyText>Controle de qualidade e monitoramento de swabs de forma simples e eficiente.</BodyText>
            </VStack>
            <Box flex={2} h={"100%"}>
                <>OI</>
            </Box>
        </HStack>
    )
}