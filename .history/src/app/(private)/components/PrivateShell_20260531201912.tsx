import { AuthProvider } from "@/permissions/auth-provider";




export function PrivateShell({ children }: { children: React.ReactNode }) {
    
    return (
        <AuthProvider session={ }>

        </AuthProvider>
    )
}