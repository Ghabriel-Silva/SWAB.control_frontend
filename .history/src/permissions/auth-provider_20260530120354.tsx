"use client"

import { createContext, useContext } from "react"
import { MyJwtPayload } from "./types"
import { Role } from "./roles"

interface AuthContextValue {
    user: MyJwtPayload | null
    role: Role | null
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

//Contexto para envelopar infos e trbalhar com autorizações de componentes 
export function AuthProvider({ session, children }: { session: MyJwtPayload | null, children: React.ReactNode }) {
    return <AuthContext.Provider value={{
        user: session,
        role: session?.role ?? null,
        isAuthenticated: session !== null,
    }}>
        {children}
    </AuthContext.Provider>
}

//Hoock para qualquer lugar consiga chamar no client component para ter acesso a perminção

export function useAuth(): AuthContextValue {
    const context = useC
}