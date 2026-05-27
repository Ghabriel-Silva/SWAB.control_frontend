import { ResponseError } from "../types/error.response";



type ApiRequestProps = RequestInit & {
    body?: unknown;
}

export async function api(
    endpoint: string,
    options: ApiRequestProps
) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options?.headers || {}),
        },

        ...options,

        body: options?.body
            ? options.body
            : undefined,
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
        throw {
            success: data.succes,
            message: data.message || 'Erro ao realizar operação'
        } as ResponseError
    }

    await setSessionCookies(data.data)

    return data
}