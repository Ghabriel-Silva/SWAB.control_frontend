
import { SwabResponse } from "../types/swab.response"

export async function swabService(): Promise<SwabResponse> {
    const res = await fetch("/api/swab/get", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    console.log("RAW swab data:", JSON.stringify(data).slice(0, 500));
    const json: SwabResponse = await res.json()
    if (!res.ok) throw json

    return json
}