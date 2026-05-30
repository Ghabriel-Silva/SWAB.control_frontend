import { SidebarLayout } from "@/app/(private)/"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body>
                <SidebarLayout>
                    {children}
                </SidebarLayout>
            </body>
        </html>
    )
}