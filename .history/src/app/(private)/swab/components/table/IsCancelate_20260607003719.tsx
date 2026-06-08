import { Badge } from "@chakra-ui/react";
import { ValueDataGridColumn } from "../../types/value.data-grid.column";


export function IsCancelled({ value }: ValueDataGridColumn<boolean>) {
    const color = value ?
        'red' :
        'green'

    return (
        <Badge
            colorPalette={color}
        >
            {value ?}
        </Badge>
    )
}