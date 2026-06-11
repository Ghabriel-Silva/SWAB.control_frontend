import { SwabCheckResult } from "@/app/(private)/types/swab";

export interface Tank {
    id: string;
    name: string;
}

export interface Check {
    id: string;
    type: string;
    result: SwabCheckResult;
    validatedAt: string | null;
    valueAtp: number | null;
}

export interface Operator {
    id: string
    name: string
}
export interface SwabApiItem {
    id: string;
    internalCode: string;
    faucetCode: string | null;
    isCancelled: boolean;
    cancelledAt: string | null;
    cancelReason: string | null;
    createdAt: string;
    updatedAt: string;
    lastFaucetTank: string;
    operator: Operator | null;
    batch: string | null;
    tank: Tank;
    check: Check;
}
export interface meta {
    limit: number,
    page: number,
    total: number,
    totalPages: number
}


export interface SwabResponse<T> {
    success: boolean;
    message: string;
    data: T;
    meta:
}
