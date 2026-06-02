import { AuthProvider } from "@/permissions/auth-provider";
import { getSession } from "@/permissions/get.sessions";
import { Sidebar } from "./Sidebar";




export async function PrivateShell({ children }: { children: React.ReactNode }) {
    const session = await getSession()
    return (
       <AuthProvider session={session}>
            <B>
                <Sidebar />
                {children} 
            </>
        </AuthProvider>
    )
}