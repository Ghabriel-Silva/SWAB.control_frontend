// import { AuthProvider } from "@/permissions/auth-provider";
// import { getSession } from "@/permissions/get.sessions";
// import SidebarLayout from "@/app/(private)/SidebarLayout"

import { PrivateShell } from "./components/PrivateShell"

// export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
//     const session = await getSession()
//     return (
//         <AuthProvider session={session}>
//             <SidebarLayout>
//                 {children}
//             </SidebarLayout>

//         </AuthProvider>
//     )
// }

// app/(private)/layout.tsx

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <PrivateShell>
            {children}
        </PrivateShell>
    )
}