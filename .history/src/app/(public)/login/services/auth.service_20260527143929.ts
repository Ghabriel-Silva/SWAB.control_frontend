import { LoginType } from "../types/login.type";

export function loginService(data: LoginType) {
    return fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (res) => {
        const json = await res.json()

        if (!res.ok) throw json;
        return json;
    });
}