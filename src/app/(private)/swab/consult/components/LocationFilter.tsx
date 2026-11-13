import { Location } from "../../types/swab.response";
import { FilterSelect } from "./FilterSelect";

interface LocationFilterProps {
    locations: Location[];
    loading?: boolean;
    error?: string;
}

export function LocationFilter({
    locations,
    loading,
    error
}: LocationFilterProps) {
    return (
        <FilterSelect
            name="locationId"
            label="Local"
            options={locations.map(({
                id,
                name
            }) => ({
                label: name,
                value: id
            }))}
            disabled={loading || !!error}
            placeholder={loading ? "Carregando locais..." : "Todos"}
            error={error}
        />
    );
}
