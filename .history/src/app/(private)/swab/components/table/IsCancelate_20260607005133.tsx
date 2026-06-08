import { Badge } from "@chakra-ui/react";
import { ValueDataGridColumn } from "../../types/value.data-grid.column";


export function IsCancelled({ value }: ValueDataGridColumn<boolean | undefined>) {
    const color = value ?
        'red' :
        'green'

    return (
        <Badge
            variant={""}
            colorPalette={color}
        >
            {value ? 'SIM' : 'Não'}
        </Badge>
    )
}