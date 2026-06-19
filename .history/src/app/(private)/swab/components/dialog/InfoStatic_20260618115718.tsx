import { SimpleGrid } from "@chakra-ui/react";
import { BodyText, FormField, InfoNull } from "@/app/(private)/components/index";
import { SwabApiItem } from "../../types/swab.response";
import { format } from "date-fns";

interface SwabDataProps {
    swab: SwabApiItem
}
export const InfoStatic = ({ swab }: SwabDataProps) => {
    return (
        <SimpleGrid
            columns={{ base: 2, md: 3, lg: 3 }}
            gap={4}
            w="100%"
        >
            <FormField label="Lote">
                <BodyText>{swab?.internalCode}</BodyText>
            </FormField>

            <FormField label="Tanque">
                {swab.location.name ?? <InfoNull />}
            </FormField>

            <FormField label="Última Torneira">
                {swab.faucetCode ?? <InfoNull />}
            </FormField>

            <FormField label="Criado em">
                {
                    format(swab.createdAt, 'dd/MM/yyyy HH:mm')
                    ?? <InfoNull />
                }
            </FormField>

            <FormField label="Atualizado em">
                {
                    format(swab.updatedAt, 'dd/MM/yyyy HH:mm')
                    ?? <InfoNull />
                }
            </FormField>
            <FormField label="Tipo Swab">
                <Ba
                {swab.check.type ?? <InfoNull />}
            </FormField>
        </SimpleGrid>
    )
}