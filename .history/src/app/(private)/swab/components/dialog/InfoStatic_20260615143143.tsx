import { SimpleGrid } from "@chakra-ui/react";
import { BodyText, FormField, InfoNull } from "@/app/(private)/components/index";
import { SwabApiItem } from "../../types/swab.response";

interface SwabDataProps {
    swab: SwabApiItem
}
export const InfoStatic = ({ swab }: SwabDataProps) => {
    return (
        <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={4}
            w="100%"
        >
            <FormField label="Lote">
                <BodyText>{swab?.internalCode}</BodyText>
            </FormField>

            <FormField label="Tanque">
                {swab.tank.name ?? <InfoNull />}
            </FormField>

            <FormField label="Última Torneira">
                {swab.faucetCode ?? <InfoNull />}
            </FormField>

            <FormField label="Criado em">
                {swab.createdAt ?? <InfoNull />}
            </FormField>

            <FormField label="Atualizado em">
                {swab.updatedAt ?? <InfoNull />}
            </FormField>

            <FormField label="Tipo Swab">
                {swab.check.type ?? <InfoNull />}
            </FormField>
        </SimpleGrid>
    )
}