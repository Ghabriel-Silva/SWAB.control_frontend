import { Box } from "@chakra-ui/react";
import { FormField } from "@/app/(private)/components";
import { OperatorSelect } from "../../components/dialog/OperatorSelect";
import { useFormContext } from "react-hook-form";
import type { SwabFilterValues } from "../validations/filter.swab.schema";

interface OperatorFilterProps {
    disabled?: boolean;
}
export function OperatorFilter({ disabled }: OperatorFilterProps) {
    const { formState: { errors } } = useFormContext<SwabFilterValues>();
    return (
        <Box
            maxW="350px"
            minW={0}
        >
            <FormField
                disabled={disabled}
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
