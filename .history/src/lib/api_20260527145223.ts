
type ApiOptions = Omit<RequestInit, "body"> & {
    body?: unknown
}

export async function api<T = unknown>(
    endpoint: string,
    options: ApiOptions = {}
): Promise<T> {
    const { body, headers, ...rest } = options

    const response = await fetch(
        `${process.env.BACKEND_URL}/${endpoint}`,  // sem NEXT_PUBLIC — server only
        {
            ...rest,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: body !== undefined ? JSON.stringify(body) : undefined,
        }
    )

    const data = await response.json().catch(() => null)

    if (!response.ok) {
        throw {
            success: false,
            message: data?.message || "Erro ao realizar operação",
        }
    }

    return data as T
}