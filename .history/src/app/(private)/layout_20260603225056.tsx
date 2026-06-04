import { AuthProvider } from "@/permissions/auth-provider";
import { PrivateLayout } from "./components/PrivateLayout";
import { getSession } from "@/permissions/get.sessions";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession()
    const q

    return (
        <AuthProvider session={session}>
            <PrivateLayout>
                {children}
            </PrivateLayout>
        </AuthProvider>
    )
}