"use-client"

import { createContext, useContext } from "react"
import { MyJwtPayload } from "./types"

interface AuthContextValue {
    user: MyJwtPayload | null
    isAdmin: boolean
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ sessionm children }: { session: MyJwtPayload | null, children: React.ReactNode }) {
    return <AuthContext.Provider value={{

    }} />
}