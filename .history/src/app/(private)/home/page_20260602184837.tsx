import { Heading, HStack, VStack,Stack } from "@chakra-ui/react";
import { BodyText } from "@/app/(private)/components/index";
import Image from "next/image";
import swabHome from "@/assets/swabhome.png"
export default function homePage() {
    return (
        <HStack h={"100%"} >
            <VStack flex={1} h={"100%"} align={"start"} pt={6} gap={6}>
                <Heading fontSize={"4xl"} color={"fg"}>SWAB.CONTROL</Heading>
                <BodyText>Controle de qualidade e monitoramento de swabs de forma simples e eficiente.</BodyText>
            </VStack>
            <Stack flex={2}  h={"100%"} justifyContent={"center"} align={"center"} display={{}}>
                <Image
                    src={swabHome}
                    alt="imagem conceitual de pessoa fazendo swab"
                    style={{
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </Stack>
        </HStack>
    )
}