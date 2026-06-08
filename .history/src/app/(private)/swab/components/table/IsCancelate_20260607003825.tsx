import { Badge } from "@chakra-ui/react";
import { ValueDataGridColumn } from "../../types/value.data-grid.column";


export function IsCancelled({ value }: ValueDataGridColumn<boolean>) {
    const color = value ?
        'red' :
        'green'
    console.log(value)

    return (
        <Badge
            colorPalette={color}
        >
            {value ? 'SIM' : 'Não'}
        </Badge>
    )
}