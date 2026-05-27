const BASE_URL = 'http://localhost:3000'

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
            ? JSON.stringify(options.body)
            : undefined,
    })
}