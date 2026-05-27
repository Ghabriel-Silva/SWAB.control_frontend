import { ResponseError } from "../types/error.response";

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
            ? options.body
            : undefined,
    })

    if (!response.ok) {
        throw {
            success: response.success  ,
            message:
        } as ResponseError
    }

    return response.json()
}