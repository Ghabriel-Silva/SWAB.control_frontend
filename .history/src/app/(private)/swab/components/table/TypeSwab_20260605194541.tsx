import { SubtitleText } from "@/app/(private)/components"
import { SwabCheckType } from "@/app/(private)/types/swab"
import { Badge } from "@chakra-ui/react"
import { ValueDataGridColumn } from "../../types/value.data-grid.column"


export function TypeSwab({ value }: ValueDataGridColumn<SwabCheckType | undefined>) {

    const result = value
    const color =
        result === SwabCheckType.ATP
            ? 'orange'
            : result === SwabCheckType.VISUAL
                ? 'blue'
                : 'red'
    return (
        <Select.Root
            value={valueResult}
            colorPalette={mutateValue()}
            collection={swabCheckResultCollection}
            size="xs"
            onValueChange={(e) => {
                setValueResult(e.value)
                mutateValue()
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