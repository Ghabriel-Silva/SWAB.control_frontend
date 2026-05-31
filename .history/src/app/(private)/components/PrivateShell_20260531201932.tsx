import { AuthProvider } from "@/permissions/auth-provider";
import { getSession } from "@/permissions/get.sessions";




export function PrivateShell({ children }: { children: React.ReactNode }) {
    const session = getSession()
    return (
        <AuthProvider session={>

        </AuthProvider>
    )
}