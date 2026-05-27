
import { Provider } from '@/components/ui/provider'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";


export const metadata = {
    title: 'SWAB Control',
    description: 'Sistema SWAB'
}

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
})

//todas as rotas recebem edições feitas aqui
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className={inter.className} suppressHydrationWarning >
            <body>
             
            </body>
        </html>
    )
}