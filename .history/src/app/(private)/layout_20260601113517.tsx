import { AuthProvider } from "@/permissions/auth-provider";

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