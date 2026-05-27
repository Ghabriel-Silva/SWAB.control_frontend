const BASE_URL = 'http://localhost:8080'

type ApiRequestProps = RequestInit & {
    body?: unknown;
}

export async function api(
    endpoint: string,
    options: ApiRequestProps
) {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options?.headers || {}),
        },

        ...options,

        body: options?.body
            ? options.
            : undefined,
    })

    if (!response.ok) {
        throw new Error('erro ao buscar dados ')
    }

    return response.json()
}