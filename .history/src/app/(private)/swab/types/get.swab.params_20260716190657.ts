
export interface GetSwabsParams {
    locationId?: string;
    operatorId?: string;
    result?: string;
    internalCode?: string;
    type?: string
    startDate?: string;
    endDate?: string;
    isCancelled?: boolean;
    page?: number;
    limit?: number;
}