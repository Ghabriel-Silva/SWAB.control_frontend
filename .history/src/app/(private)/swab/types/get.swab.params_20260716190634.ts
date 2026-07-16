import { SwabCheckResult, SwabCheckType } from "../../types/swab";

export interface GetSwabsParams {
    locationId?: string;
    operatorId?: string;
    result?: SwabCheckResult | undefined;
    internalCode?: string;
    type?: SwabCheckType | undefined
    startDate?: string;
    endDate?: string;
    isCancelled?: boolean;
    page?: number;
    limit?: number;
}