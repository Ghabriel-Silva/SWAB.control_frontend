import { FilterSelect } from "./FilterSelect";

const options = [
    {
        label: "Todos",
        value: "all"
    },
    {
        label: "Sim",
        value: "true"
    },
    {
        label: "Não",
        value: "false"
    },
]

export function CancelledFilter() {
    return <FilterSelect
        name="isCancelled"
        label="Cancelado"
        options={options}
    />
}
