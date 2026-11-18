import { Box, Input } from "@chakra-ui/react";
import { useController, useFormContext } from "react-hook-form";
import { FormField } from "@/app/(private)/components";
import type { SwabFilterValues } from "../validations/filter.swab.schema";

export function DateFilter({
    name,
    label
}: { name: "startDate" | "endDate"; label: string }) {
    const { control, trigger } = useFormContext<SwabFilterValues>()
    const {
        field,
        fieldState: { error }
    } = useController({ control, name })

    return (
        <Box maxW="350px" minW={0}>
            <FormField label={label} error={error?.message}>
                <Input
                    {...field}
                    value={field.value ?? ""}
                    size="xs"
                    type="date"
                    onChange={(event) => {
                        field.onChange(event.target.value)
                        void trigger(["startDate", "endDate"])
                    }}
                />
            </FormField>
        </Box>
    )
}
