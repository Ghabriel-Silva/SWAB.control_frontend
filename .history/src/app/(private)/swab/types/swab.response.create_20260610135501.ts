export interface CreateSwabResponse {
    invalidTanks: string[];
    pending: {
        tank: string;
        swabId?: string;
        message: string;
    }[];
    swabs: {
        swabId: string;
        tankName: string;
    }[];
}