import 
export const metadata = {
    title: 'SWAB Control',
    description: 'Sistema SWAB'
}

const inter = Inter
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    )
}