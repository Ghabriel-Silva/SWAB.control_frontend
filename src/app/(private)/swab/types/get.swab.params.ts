import { SwabCheckResult, SwabCheckType } from "../../types/swab";

export interface GetSwabsParams {
    areaId?: string;
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
