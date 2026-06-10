export interface CreateSwabResponse {
    invalidTanks: string[];
    pending: {
        tank: string;
        swabId?: string;
        message: string;
    }[];
    swabsCreate: {
        swabId: string,
        internalCodeSwab: string,
        typeAtp: SwabC,
        tankName: string
    }[];
}