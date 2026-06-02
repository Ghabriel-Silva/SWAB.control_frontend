import { getSession } from "@/auth/get-session";
import { AuthProvider } from "@/permissions/auth-provider";
import { PrivateLayout } from "./private-layout";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession();

    return (
        <AuthProvider session={session}>
            <PrivateLayout>
                {children}
            </PrivateLayout>
        </AuthProvider>
    );
}