import { AuthProvider } from "@/permissions/auth-provider";
import { PrivateLayout } from "./components/PrivateLayout";
import { getSession } from "@/permissions/get.sessions";
import { QueryProvider } from "./providers/QueryProvider";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession()


    return (
        <AuthProvider session={session}>
            <PrivateLayout>
                <QueryProvider>
                    
                </QueryProvider>
                {children}
            </PrivateLayout>
        </AuthProvider>
    )
}