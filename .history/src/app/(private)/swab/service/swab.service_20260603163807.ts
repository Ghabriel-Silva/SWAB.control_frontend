"use client"
import { SwabResponse } from "../types/swab.response"

export async function swabService(): Promise<SwabResponse> {
    const res =  fetch("/api/swab/get", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    const json = await res.json()
    if (!res.ok) throw json

    return json
}