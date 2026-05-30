import { AuthProvider } from "@/permissions/auth-provider";
import { getSession } from "@/permissions/get.sessions";


export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
    const session = await getSession()

    return (
        <AuthProvider session={session}>
            <Slider
            {children}
        </AuthProvider>
    )
}