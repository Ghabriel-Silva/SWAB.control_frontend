import {Inter} from 'next/font/google'

export const metadata = {
    title: 'SWAB Control',
    description: 'Sistema SWAB'
}

const inter = Inter({
    subsets:['latin'], 
    display:'swap'
})

//todas as rotas recebem edições feitas aqui
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className={}>
            <body>
                {children}
            </body>
        </html>
    )
}