export async function api(endpoint: string, options?: RequestInit) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
        {
            headers: {
                "Content-Type": "application/json",
                ...(options?.headers || {}),
            },
            ...options,
        }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw {
            message: data?.message || "Erro ao realizar operação",
        };
    }

    return data;
}