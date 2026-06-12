
import { Flex } from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { FormField } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";
import { defaultValue } from "../../utils/defaultValue";
import { SwabApiItem, SwabResponse } from "../../types/swab.response";

interface DialogContainerProps {
    data: SwabResponse<SwabApiItem>
}


export function BodyDialog({ data }: DialogContainerProps) {

    return (
        <Flex>
            <FormField label="lote">
                {data?.data.internalCode}
            </FormField>
            <FormField label="lote">
                {data?.data.id}
            </FormField>
        </Flex>
    )
}