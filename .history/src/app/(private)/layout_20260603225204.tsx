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
    const queryClient = new QueryClient()

    return (
        <AuthProvider session={session}>
            <QueryClientProvider >
                <PrivateLayout>
                    {children}
                </PrivateLayout>
            </QueryClientProvider>

        </AuthProvider>
    )
}