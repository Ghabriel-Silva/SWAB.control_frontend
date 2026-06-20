import { Badge, SimpleGrid } from "@chakra-ui/react";
import {FormField, InfoNull, SubtitleText } from "@/app/(private)/components/index";
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
                <Bod>{swab?.internalCode}</SubtitleText>
            </FormField>
            <FormField label="Tanque">
                {swab.location.name ? (
                    <SubtitleText>
                        {swab.location.name}
                    </SubtitleText>
                ) : (
                    <InfoNull />
                )
                }
            </FormField>

            <FormField label="Toneira">
                {swab.faucetCode ? (
                    <SubtitleText>
                        {swab.location.name}
                    </SubtitleText>
                ) : (
                    <InfoNull />
                )
                }
            </FormField>
            <FormField label="Criado em">
                {swab.location.name ? (
                    <SubtitleText>
                        {format(swab.createdAt, 'dd/MM/yyyy HH:mm')}
                    </SubtitleText>
                ) : (
                    <InfoNull />
                )
                }
            </FormField>

            <FormField label="Atualizado em">
                {swab.location.name ? (
                    <SubtitleText>
                        {format(swab.updatedAt, 'dd/MM/yyyy HH:mm')}
                    </SubtitleText>
                ) : (
                    <InfoNull />
                )
                }
            </FormField>
            <FormField label="Tipo Swab">
                <Badge colorPalette={defineColorTypeSwab(swab.check.type)}>
                    {swab.location.name ? (
                        <SubtitleText>
                            {swab.check.type}
                        </SubtitleText>
                    ) : (
                        <InfoNull />
                    )
                    }
                </Badge>
            </FormField>
        </SimpleGrid>
    )
}