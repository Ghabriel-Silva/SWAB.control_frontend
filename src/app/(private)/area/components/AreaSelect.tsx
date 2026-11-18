import { FilterSelect } from "@/app/(private)/swab/consult/components/FilterSelect";
import { useGetAreas } from "../hooks/useGetAreas";

export function AreaSelect() {
    const { data: areas = [], isPending, error } = useGetAreas()

    return (
        <FilterSelect
            name="areaId"
            label="Área"
            options={areas.map(({ id, name }) => ({ label: name, value: id }))}
            disabled={isPending || (!!error && areas.length === 0)}
            placeholder={isPending ? "Carregando áreas..." : areas.length ? "Todas" : "Nenhuma área disponível"}
            error={error?.message}
        />
    )
}
