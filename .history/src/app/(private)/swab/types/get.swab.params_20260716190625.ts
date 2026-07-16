import { SwabCheckResult, SwabCheckType } from "../../types/swab";

export interface GetSwabsParams {
    locationId?: string;
    operatorId?: string;
    result?: SwabCheckResult;
    internalCode?: string;
    type?: SwabCheckType | unde
    startDate?: string;
    endDate?: string;
    isCancelled?: boolean;
    page?: number;
    limit?: number;
}