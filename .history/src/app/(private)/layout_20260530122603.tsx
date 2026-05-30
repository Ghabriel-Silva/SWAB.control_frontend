import { AuthProvider } from "@/permissions/auth-provider";
import { getSession } from "@/permissions/get.sessions";
import  from "@/app/(private)/SidebarLayout"

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
    const session = await getSession()

    return (
        <AuthProvider session={session}>
        
        </AuthProvider>
    )
}