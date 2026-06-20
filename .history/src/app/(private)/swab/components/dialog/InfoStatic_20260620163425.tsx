import { Badge, SimpleGrid } from "@chakra-ui/react";
import { BodyText, FormField, InfoNull } from "@/app/(private)/components/index";
import { format } from "date-fns";
import { defineColorTypeSwab } from "@/app/(private)/utils/defineColorTypeSwab";
import { SwabDataProps } from "../../types/swab.dataProps";


export const InfoStatic = ({ swab }: SwabDataProps) => {
    return (
        <SimpleGrid
            border={"1px solid"}
            borderColor={"gray.200"}
            p={4}
            borderRadius={"sm"}
            columns={{ base: 2, md: 3, lg: 3 }}
            gap={4}
            w="100%"
        >
            <FormField label="Lote">
                <BodyText>{swab?.internalCode}</BodyText>
            </FormField>
            <FormField label="Tanque">
                {swab.location.name ? (
                    <BodyText>
                        {swab.location.name}
                    </BodyText>
                ) : (
                    <InfoNull />
                )
                }
            </FormField>

            <FormField label="Toneira">
                {swab.faucetCode ? (
                    <BodyText>
                        {swab.location.name}
                    </BodyText>
                ) : (
                    <InfoNull />
                )
                }
            </FormField>
            <FormField label="Criado em">
                {swab.location.name ? (
                    <BodyText>
                       format(swab.createdAt, 'dd/MM/yyyy HH:mm')
                    </BodyText>
                ) : (
                    <InfoNull />
                )
                }
            </FormField>

            <FormField label="Atualizado em">
                {
                    format(swab.updatedAt, 'dd/MM/yyyy HH:mm')
                    ?? <InfoNull />
                }
            </FormField>
            <FormField label="Tipo Swab">
                <Badge colorPalette={defineColorTypeSwab(swab.check.type)}>
                    {swab.check.type ?? <InfoNull />}
                </Badge>
            </FormField>
        </SimpleGrid>
    )
}