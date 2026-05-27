// app/api/auth/login/route.ts
import { cookies } from "next/headers"
import { api } from "@/lib/api/client"

type LoginResponse = {
    data: { token: string }
    message: string
}

export async function POST(req: Request) {
    const body = await req.json()

    try {
        const data = await api<LoginResponse>("auth/login", {
            method: "POST",
            body,  // api.ts faz o JSON.stringify internamente
        })

        const store = await cookies()
        store.set("token", data.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        })

        return Response.json(data)

    } catch (err) {
        const error = err as { message: string }
        return Response.json(
            { message: error.message || "Erro ao realizar login" },
            { status: 401 }
        )
    }
}