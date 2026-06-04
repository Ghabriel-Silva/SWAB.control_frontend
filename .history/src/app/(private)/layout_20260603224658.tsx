import { AuthProvider } from "@/permissions/auth-provider";
import { PrivateLayout } from "./components/PrivateLayout";
import { getSession } from "@/permissions/get.sessions";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession()

    return (
        <Quer
        <AuthProvider session={session}>
            <PrivateLayout>
                {children}
            </PrivateLayout>
        </AuthProvider>
    )
}