import { AuthProvider } from "@/permissions/auth-provider";




export function PrivateShell({ children }: { children: React.ReactNode }) {
    const session = getSessio
    return (
        <AuthProvider session={ }>

        </AuthProvider>
    )
}