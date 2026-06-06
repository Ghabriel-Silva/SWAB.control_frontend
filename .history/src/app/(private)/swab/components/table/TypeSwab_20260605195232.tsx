import { SwabCheckType } from "@/app/(private)/types/swab"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"
import { useState } from "react"


export function TypeSwab({ value }: ValueDataGridColumn<SwabCheckType>) {
    const [valueType, setValueType] = useState<string[]>([value])

    const result = value
    const color =
        result === SwabCheckType.ATP
            ? 'orange'
            : result === SwabCheckType.VISUAL
                ? 'blue'
                : 'red'
    return (
        <Select.Root
            value={valueType}
            colorPalette={color}
            collection={swabTypeCollection}
            size="xs"
            onValueChange={(e) => {
                setValueType(e.value)
            }}
        >
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger
                    borderColor="colorPalette.muted"
                    bg="colorPalette.subtle"
                    color="colorPalette.fg"
                >
                    <Select.ValueText />
                </Select.Trigger>
                <Select.IndicatorGroup>
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
    )
}

const swabTypeCollection = createListCollection({
    items: [
        { label: "ATP", value: SwabCheckType.ATP },
        { label: "APROVADO", value: SwabCheckType.MICRO },
        { label: "REPROVADO", value: SwabCheckType.VISUAL },
    ],
})