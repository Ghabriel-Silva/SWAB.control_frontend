import { HStack } from "@chakra-ui/react";
import { BodyText, FormField, InfoNull } from "@/app/(private)/components/index";
import { SwabApiItem } from "../../types/swab.response";

interface SwabDataProps {
    swab: SwabApiItem
}
export const InfoStatic = ({ swab }: SwabDataProps) => {
    return (
        <HStack  bg={"red"} gap={5}>
            <Bo>
                <FormField label="lote" >
                    <BodyText>
                        {swab?.internalCode}
                    </BodyText>
                </FormField>
                <FormField label="Tanque">
                    {swab.tank.name ?? <InfoNull />}
                </FormField>
                <FormField label="Ultima Torneira">
                    {swab.faucetCode ?? <InfoNull />}
                </FormField>
            </Box>
            <FormField label="Criado em">
                {swab.createdAt ?? <InfoNull />}
            </FormField>
            <FormField label="Atualizado em">
                {swab.updatedAt ?? <InfoNull />}
            </FormField>
            <FormField label="Tipo Swab">
                {swab.check.type ?? <InfoNull />}
            </FormField>
        </HStack>
    )
}