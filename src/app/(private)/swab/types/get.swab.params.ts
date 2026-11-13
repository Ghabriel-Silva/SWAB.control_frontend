import { SwabCheckResult, SwabCheckType } from "../../types/swab";

export interface GetSwabsParams {
    locationId?: string;
    operatorId?: string;
    result?: SwabCheckResult;
    internalCode?: string;
    performedType?: SwabCheckType;
    startDate?: string;
    endDate?: string;
    isCancelled?: boolean;
    page?: number;
    limit?: number;
    order?: "ASC" | "DESC";

}
