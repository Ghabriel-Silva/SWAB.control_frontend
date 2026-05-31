import { AuthProvider } from "@/permissions/auth-provider";




export function PrivateShell({ children }: { children: React.ReactNode }) {
    const session = getSe
    return (
        <AuthProvider session={ }>

        </AuthProvider>
    )
}