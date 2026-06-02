import { Heading, HStack, VStack, Box } from "@chakra-ui/react";
import { BodyText } from "@/app/(private)/components/index";

export default function homePage() {
    return (
        <HStack h={"100%"} >
            <VStack flex={1} h={"100%"} align={"start"} pt={6} gap={6}>
                <Heading fontSize={"4xl"} color={"fg"}>SWAB.CONTROL</Heading>
                <BodyText>Controle de qualidade e monitoramento de swabs de forma simples e eficiente.</BodyText>
            </VStack>
            <Box flex={2} h={"100%"} bg={"blue.300"}>
                <Image
                    src={imageSwab}
                    alt="imagem conceitual de pessoa fazendo swab"
                    style={{
                        height: "100vh",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </Box>
        </HStack>
    )
}