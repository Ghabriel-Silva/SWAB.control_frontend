import { SwabCheckType } from "../../types/swab";

export interface CreateSwabResponse {
    invalidLocation: string[];
    pending: {
        location: string;
        swabId?: string;
        message: string;
    }[];
    swabsCreate: {
        swabId: string,
        internalCodeSwab: string,
        typeAtp: SwabCheckType,
        locationName: string
    }[];
}