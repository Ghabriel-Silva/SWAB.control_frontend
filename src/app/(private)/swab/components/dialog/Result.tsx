import { SwabCheckResult } from "@/app/(private)/types/swab"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form";
import { SwabSelectProps } from "../../types/swab.select.props";

export const ResultSelect = ({ size = "xs", placeholder, clearable = false }: SwabSelectProps) => {
    const { control } = useFormContext<{ result: string }>()
    return (
        <Controller
            control={control}
            name="result"
            render={({ field }) => (
                <Select.Root
                    name={field.name}
                    value={field.value ? [field.value] : []}
                    collection={swabCheckResultCollection}
                    onValueChange={(details) => {
                        field.onChange(details.value[0] ?? "")
                    }}
                    onFocusOutside={field.onBlur}
                    size={size}
                >
                    <Select.HiddenSelect />
                    <Select.Control>
                        <Select.Trigger ref={field.ref}>
                            <Select.ValueText placeholder={placeholder} />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            {clearable && <Select.ClearTrigger aria-label="Limpar resultado" />}
                            <Select.Indicator color="colorPalette.fg" />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {swabCheckResultCollection.items.map((Result) => (
                                    <Select.Item item={Result} key={Result.value}>
                                        {Result.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
            )}
        />
    );
}
const swabCheckResultCollection = createListCollection({
    items: [
        { label: "PENDENTE", value: SwabCheckResult.PENDING },
        { label: "APROVADO", value: SwabCheckResult.APPROVED },
        { label: "REPROVADO", value: SwabCheckResult.REPROVED },
    ],
})
