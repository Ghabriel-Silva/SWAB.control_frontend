import { Heading, HStack, VStack, Stack } from "@chakra-ui/react";
import { BodyText } from "@/app/(private)/components/index";
import Image from "next/image";
import swabHome from "@/assets/swabhome.png"
export default function homePage() {
    return (
        <HStack h={"100%"} flexDirection={{ base: 'column', md: "row" }}  >
            <VStack flex={1} h={"100%"} align={{base:'center',md:"start"}} pt={6} gap={6}>
                <Heading fontSize={"4xl"} color={"fg"}>SWAB.CONTROL</Heading>
                <BodyText>Controle de qualidade e monitoramento de swabs de forma simples e eficiente.</BodyText>
            </VStack>
            <Stack flex={2} maxW={60} h={"100%"} justifyContent={"center"} align={"center"}>
                <Image
                    src={swabHome}
                    alt="imagem conceitual de  swab"
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