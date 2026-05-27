export async function loginService(data: LoginType): Promise<ResponseLogin> {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })

    const json = await res.json()

    if (!res.ok) throw json   // vai cair no callback error do toaster

    return json
}