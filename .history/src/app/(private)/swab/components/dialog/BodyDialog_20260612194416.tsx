
import { Flex } from "@chakra-ui/react";
import { FormField } from "@/app/(private)/components/index";
import { SwabApiItem, SwabResponse } from "../../types/swab.response";

interface DialogContainerProps {
    dataSwab: SwabResponse<SwabApiItem>
}


export function BodyDialog({ dataSwab }: DialogContainerProps) {
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