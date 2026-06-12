
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
                {dataSwab?.data.internalCode}
            </FormField>
            <FormField label="lote">
                {dataSwab?.data.check.}
            </FormField>
        </Flex>
    )
}