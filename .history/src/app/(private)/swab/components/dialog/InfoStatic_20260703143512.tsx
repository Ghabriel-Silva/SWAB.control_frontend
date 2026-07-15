import { Badge, SimpleGrid } from "@chakra-ui/react";
import { BodyText, FormField, InfoNull } from "@/app/(private)/components";
import { format } from "date-fns";
import { defineColorTypeSwab } from "@/app/(private)/utils/defineColorTypeSwab";
import { SwabDataProps } from "../../types/swab.dataProps";

export const InfoStatic = ({ swab }: SwabDataProps) => {
    return (
        <SimpleGrid
            border="1px solid"
            borderColor="gray.200"
            p={4}
            borderRadius="sm"
            columns={{ base: 2, md: 3, lg: 3 }}
            gap={4}
            w="100%"
        >
            <FormField label="Lote">
                <BodyText>{swab?.internalCode}</BodyText>
            </FormField>

            <FormField label="Tanque">
                {swab.location.name ? (
                    <BodyText>{swab.location.name}</BodyText>
                ) : (
                    <InfoNull />
                )}
            </FormField>

            <FormField label="Torneira">
                {swab.faucetCode ? (
                    <BodyText>{swab.faucetCode}</BodyText>
                ) : (
                    <InfoNull />
                )}
            </FormField>

            <FormField label="Data de Criação">
                {swab.createdAt ? (
                    <BodyText>
                        {format(swab.createdAt, "dd/MM/yyyy HH:mm")}
                    </BodyText>
                ) : (
                    <InfoNull />
                )}
            </FormField>

            <FormField label="Última Atualização">
                {swab.updatedAt ? (
                    <BodyText>
                        {format(swab.updatedAt, "dd/MM/yyyy HH:mm")}
                    </BodyText>
                ) : (
                    <InfoNull />
                )}
            </FormField>

            <FormField label="Tipo de Swab">
                {swab.check.type ? (
                    <Badge colorPalette={defineColorTypeSwab(swab.check.type)}>
                        <BodyText>{swab.check.type}</BodyText>
                    </Badge>
                ) : (
                    <InfoNull />
                )}
            </FormField>

            <FormField label="Justificativa da Alteração do Tipo de Swab">
                {swab.check.updateSwabJustification ? (
                    <BodyText>
                        {swab.check.updateSwabJustification}
                    </BodyText>
                ) : (
                    <InfoNull />
                )}
            </FormField>

            <FormField label="Justificativa de mesma torneira">
                {swab.check.sameFaucetJustification? (
                    <BodyText>
                        {swab.check.sameFaucetJustification}
                    </BodyText>
                ) : (
                    <InfoNull />
                )}
            </FormField>
        </SimpleGrid>
    );
};