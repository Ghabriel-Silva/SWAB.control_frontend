
import { SwabResponse } from "../types/swab.response"

export async function swabService():Promise {
    const res = await fetch("/api/swab", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    })
    const json: = await res.json()
    if (!res.ok) throw json

    return json as SwabResponse
}