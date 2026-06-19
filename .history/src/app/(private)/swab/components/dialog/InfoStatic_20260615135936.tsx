import { Stack } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { BodyText, FormField, InfoNull } from "@/app/(private)/components/index";
import { SwabApiItem } from "../../types/swab.response";


export const InfoStatic = (data: SwabApiItem) => {

    return (
        <Stack flexWrap={"wrap"}>
            <FormField label="lote">
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
            <FormField label="Criado em">
                {swab.createdAt ?? <InfoNull />}
            </FormField>
            <FormField label="Atualizado em">
                {swab.updatedAt ?? <InfoNull />}
            </FormField>
            <FormField label="Tipo Swab">
                {swab.check.type ?? <InfoNull />}
            </FormField>
        </Stack>
    )
}