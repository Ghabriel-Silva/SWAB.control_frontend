import { Box } from "@chakra-ui/react";
import { FormField } from "@/app/(private)/components";
import { TypeSwabSelect } from "../../components/dialog/TypeSwab";
import { useFormContext } from "react-hook-form";
import type { SwabFilterValues } from "../validations/filter.swab.schema";

export function TypeFilter() {
    const { formState: { errors } } = useFormContext<SwabFilterValues>();
    return (
        <Box
            maxW="350px"
            minW={0}
        >
            <FormField
                label="Tipo de SWAB"
                error={errors.performedType?.message}
            >
                <TypeSwabSelect
                    size="xs"
                    placeholder="Todos"
                    clearable
                />
            </FormField>
        </Box>
    );
}
