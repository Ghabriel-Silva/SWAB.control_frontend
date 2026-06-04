import { cookies } from "next/headers";
import { SwabResponse } from "../types/swab.response";

export async function swabService(): Promise<SwabResponse> {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/swab`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
        },
        cache: "no-store",
    });

    const json = await res.json();

    if (!res.ok) throw new Error(`Status ${res.status}: ${JSON.stringify(json)}`);

    return json as SwabResponse;
}