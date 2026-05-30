"use-client"

import { createContext, useContext } from "react"

interface AuthContextValue {
    user: MyJwtPayload| null
    isAdmin: boolean
    isAuthenticated: boolean
}