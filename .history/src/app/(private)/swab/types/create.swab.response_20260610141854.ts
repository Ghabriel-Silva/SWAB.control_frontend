export interface CreateSwabResponse {
    invalidTanks: string[];
    pending: {
        tank: string;
        swabId?: string;
        message: string;
    }[];
    swabsCreate: {
        swabId: "58d74c3b-dabc-4ba9-a639-982435b7b183",
        internalCodeSwab: string,
        typeAtp: string
    }[];
}