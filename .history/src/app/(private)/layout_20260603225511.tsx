import { AuthProvider } from "@/permissions/auth-provider";
import { PrivateLayout } from "./components/PrivateLayout";
import { getSession } from "@/permissions/get.sessions";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession()
    const queryClient = useQueryClient()

    return (
        <AuthProvider session={session}>
            <PrivateLayout>
                {children}
            </PrivateLayout>
        </AuthProvider>
    )
}