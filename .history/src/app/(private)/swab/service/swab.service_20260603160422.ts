
import { SwabResponse } from "../types/swab.response"

export async function swabService() {
    const res = await fetch("/api/swab", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    const json = await res.json()
    if (!res.ok) throw json

    return json as SwabResponse
}