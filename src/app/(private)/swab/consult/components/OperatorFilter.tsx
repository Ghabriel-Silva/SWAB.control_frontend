import { Box } from "@chakra-ui/react";
import { FormField } from "@/app/(private)/components";
import { OperatorSelect } from "../../components/dialog/OperatorSelect";
import { useFormContext } from "react-hook-form";
import type { SwabFilterValues } from "../validations/filter.swab.schema";

export function OperatorFilter() {
    const { formState: { errors } } = useFormContext<SwabFilterValues>();
    return (
        <Box
            maxW="350px"
            minW={0}
        >
            <FormField
                label="Operador"
                error={errors.operatorId?.message}
            >
                <OperatorSelect
                    size="xs"
                    placeholder="Todos os operadores"
                />
            </FormField>
        </Box>
    );
}
