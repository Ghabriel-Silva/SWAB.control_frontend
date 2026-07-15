import { SwabCheckResult, SwabCheckType } from "@/app/(private)/types/swab";

export interface Location {
    id: string;
    name: string;
}

export interface Check {
    id: string;
    type: SwabCheckType;
    lasyType: SwabCheckType;
    result: SwabCheckResult;
    validatedAt: string | null;
    valueAtp: number | null;
    sameFaucetJustification: string | null;
    updateSwabJustification: string | null;
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
    lastFaucetLocation: string;
    operator: Operator | null;
    batch: string | null;
    location: Location;
    check: Check;
}
export interface Meta {
    limit: number,
    page: number,
    total: number,
    totalPages: number
}


export interface SwabResponse<T> {
    success: boolean;
    message: string;
    data: T;
    meta: Meta;
}
