import {
    Box,
    createListCollection,
    Portal,
    Select
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { FormField } from "@/app/(private)/components";
import type { SwabFilterValues } from "../validations/filter.swab.schema";

interface FilterSelectProps {
    name: "locationId" | "isCancelled";
    label: string;
    options: { label: string; value: string }[];
    disabled?: boolean;
    placeholder?: string;
    error?: string;
}

export function FilterSelect({
    name,
    label,
    options,
    disabled,
    placeholder = "Todos",
    error
}: FilterSelectProps) {
    const {
        control,
        formState: { errors }
    } = useFormContext<SwabFilterValues>();
    const collection = createListCollection({ items: options });

    return (
        <Box
            maxW="350px"
            minW={0}
        >
            <FormField
                label={label}
                error={error ?? errors[name]?.message}
            >
                <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <Select.Root
                            name={field.name}
                            collection={collection}
                            value={field.value ? [field.value] : []}
                            onValueChange={({ value }) => field.onChange(value[0] === "all" ? "" : value[0] ?? "")}
                            onFocusOutside={field.onBlur}
                            disabled={disabled}
                            size="xs"
                        >
                            <Select.HiddenSelect />
                            <Select.Control>
                                <Select.Trigger ref={field.ref}>
                                    <Select.ValueText placeholder={placeholder} />
                                </Select.Trigger>
                                <Select.IndicatorGroup>
                                    <Select.ClearTrigger aria-label={`Limpar ${label.toLowerCase()}`} />
                                    <Select.Indicator color="colorPalette.fg" />
                                </Select.IndicatorGroup>
                            </Select.Control>
                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {collection.items.map((item) => (
                                            <Select.Item
                                                key={item.value}
                                                item={item}
                                            >
                                                {item.label}
                                                <Select.ItemIndicator />
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>
                    )}
                />
            </FormField>
        </Box>
    );
}
