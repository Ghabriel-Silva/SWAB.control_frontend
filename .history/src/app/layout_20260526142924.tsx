import {Poppins} from 'next/font/google'

export const metadata = {
    title: 'SWAB Control',
    description: 'Sistema SWAB'
}

const popins = Poppins({
    subsets:['']
})
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