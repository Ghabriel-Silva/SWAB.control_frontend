"use client"
import { SwabResponse } from "../types/swab.response"

export async function swabService(): Promise<SwabResponse> {
    const res = await fetch("/api/swab/get", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    const json: SwabResponse = await res.json()
    if (!res.ok) throw json

    return json
}