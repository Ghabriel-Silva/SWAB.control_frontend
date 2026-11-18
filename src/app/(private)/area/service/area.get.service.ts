import type { ApiResponse } from "@/app/shared/types/api.response";

interface Area {
    id: string;
    name: string;
}

export async function getAreas(): Promise<Area[]> {
    const response = await fetch("/api/area");
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data?.message || "Erro ao buscar áreas");
    }

    const result: ApiResponse<Area[]> = data;
    return result.data;
}
