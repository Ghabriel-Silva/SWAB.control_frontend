import { SwabCheckResult, SwabCheckType } from "../../types/swab";

export interface GetSwabsParams {
    locationId?: string;
    operatorId?: string;
    result?: string;
    internalCode?: string;
    type?: SwabCheckType 
    startDate?: string;
    endDate?: string;
    isCancelled?: boolean;
    page?: number;
    limit?: number;
}