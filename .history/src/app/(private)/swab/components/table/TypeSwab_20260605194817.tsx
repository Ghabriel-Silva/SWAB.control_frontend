import { SubtitleText } from "@/app/(private)/components"
import { SwabCheckType } from "@/app/(private)/types/swab"
import { Badge, Select } from "@chakra-ui/react"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"
import { useState } from "react"


export function TypeSwab({ value }: ValueDataGridColumn<SwabCheckType | undefined>) {
    const [valueType, setValueType] = useState<string>(value)

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
            collection={ }
            size="xs"
            onValueChange={(e) => {
                setValueResult(e.value)
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
    )
}

const swabTypeCollection = createListCollection({
    items: [
        { label: "PENDENTE", value: SwabCheckType.PENDING },
        { label: "APROVADO", value: SwabCheckType.APPROVED },
        { label: "REPROVADO", value: SwabCheckType.REPROVED },
    ],
})