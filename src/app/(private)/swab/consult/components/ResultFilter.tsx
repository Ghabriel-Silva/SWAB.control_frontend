import { Box } from "@chakra-ui/react";
import { FormField } from "@/app/(private)/components";
import { ResultSelect } from "../../components/dialog/Result";
import { useFormContext } from "react-hook-form";
import type { SwabFilterValues } from "../validations/filter.swab.schema";

export function ResultFilter() {
    const { formState: { errors } } = useFormContext<SwabFilterValues>();
    return (
        <Box
            maxW="350px"
            minW={0}
        >
            <FormField
                label="Resultado"
                error={errors.result?.message}
            >
                <ResultSelect
                    size="xs"
                    placeholder="Todos"
                    clearable
                />
            </FormField>
        </Box>
    );
}
