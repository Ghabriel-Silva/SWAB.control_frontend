"use client"

import { Provider } from "@/components/ui/provider"
import { Toaster } from "@/components/ui/toaster"

export  function Providers({ children }: { children: React.ReactNode }) {
    return (
        <body>
        
        <Provider forcedTheme="light">
            {children}
            <Toaster />
        </Provider>
    )
}