// app/api/auth/login/route.ts
import { cookies } from "next/headers";

export async function POST(req: Request) {
    const body = await req.json();

    const response = await fetch(
        `${process.env.BACKEND_URL}/auth/login`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        return Response.json(data, { status: 401 });
    }

    cookies().set("token", data.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });

    return Response.json({
        user: data.data.user,
    });
}