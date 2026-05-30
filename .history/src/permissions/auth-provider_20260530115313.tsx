"use-client"

import { createContext, useContext } from "react"
import { MyJwtPayload } from "./types"

interface AuthContextValue {
    user: MyJwtPayload | null
    isAdmin: boolean
    isAuthenticated: boolean
}

const AuthContext = createContext()