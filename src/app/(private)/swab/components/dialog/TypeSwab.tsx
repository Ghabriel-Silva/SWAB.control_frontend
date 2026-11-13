import { SwabCheckType } from "@/app/(private)/types/swab"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
import { SwabSelectProps } from "../../types/swab.select.props"


interface DisabledProps extends SwabSelectProps {
    value?: boolean
}
export function TypeSwabSelect({ value = false, size = "xs", placeholder, clearable = false }: DisabledProps) {
    const { control, trigger } = useFormContext<{ performedType: string }>()
    return (
        <Controller
            control={control}
            name="performedType"
            render={({ field }) => (
                <Select.Root
                    name={field.name}
                    disabled={value}
                    collection={swabTypeCollection}
                    size={size}
                    onFocusOutside={field.onBlur}
                    value={field.value ? [field.value] : []}
                    onValueChange={({ value }) => {
                        field.onChange(value[0] ?? "")
                        trigger("performedType")
                    }}
                >
                    <Select.HiddenSelect />
                    <Select.Control>
                        <Select.Trigger ref={field.ref}>
                            <Select.ValueText placeholder={placeholder} />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            {clearable && <Select.ClearTrigger aria-label="Limpar tipo de SWAB" />}
                            <Select.Indicator color="colorPalette.fg" />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {swabTypeCollection.items.map((Result) => (
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
    )
}

const swabTypeCollection = createListCollection({
    items: [
        { label: "ATP", value: SwabCheckType.ATP },
        { label: "MICRO", value: SwabCheckType.MICRO },
        { label: "VISUAL", value: SwabCheckType.VISUAL },
    ],
})
