import { Meta } from "@/app/shared/types/api.response";

export interface OperatorsResponse {
    success: boolean
    message: string
    data: Operator[]
    meta: Meta | null
}

export interface Operator {
    id: string
    name: string
    isActive: boolean
    createdAt: string
    updatedAt: string
    position: Position
}

export interface Position {
    id: string
    name: string
    createdAt: string
    updatedAt: string
}
