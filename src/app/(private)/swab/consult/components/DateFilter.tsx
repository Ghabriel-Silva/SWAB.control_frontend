import { Box, Input } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { FormField } from "@/app/(private)/components";
import type { SwabFilterValues } from "../validations/filter.swab.schema";

export function DateFilter({
    name,
    label
}: { name: "startDate" | "endDate"; label: string }) {
    const {
        control,
        trigger,
        formState: { errors }
    } = useFormContext<SwabFilterValues>()

    return (
        <Box
            
           
            maxW="350px"
            minW={0}
        >
            <FormField
                label={label}
                error={errors[name]?.message}
            >
                <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <Input
                            {...field}
                            value={field.value ?? ""}
                            size="xs"
                            type="date"
                            onChange={(event) => {
                                field.onChange(event.target.value);
                                void trigger(["startDate", "endDate"]);
                            }}
                        />
                    )}
                />
            </FormField>
        </Box>
    )
}
