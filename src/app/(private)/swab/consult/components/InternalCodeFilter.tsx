import { Box, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { FormField } from "@/app/(private)/components";
import { filterSwabSchema, SwabFilterValues } from "../validations/filter.swab.schema";

export function InternalCodeFilter() {
    const {
        register,
        formState: { errors }
    } = useFormContext<SwabFilterValues>();

    return (
        <Box
            maxW="350px"
            minW={0}
        >
            <FormField
                label="Código interno"
                error={errors.internalCode?.message}
            >
                <Input
                    size="xs"
                    placeholder="Ex.: SW26100002"
                    maxLength={20}
                    {...register("internalCode", {
                        setValueAs: (value: unknown) => filterSwabSchema.fields.internalCode.cast(value),
                    })}
                />
            </FormField>
        </Box>
    );
}
