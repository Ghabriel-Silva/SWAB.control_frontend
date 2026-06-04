

import { SwabResponse } from "../types/swab.response"

export async function loginService() {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })
    const json = await res.json()
    if (!res.ok) throw json

    return json as SwabResponse
}