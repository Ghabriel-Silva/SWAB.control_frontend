import { LoginType } from "../types/login.type"
import { ResponseLogin } from "../types/reponse.login"

export async function loginService(data: LoginType) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) throw json;

  return json;
}