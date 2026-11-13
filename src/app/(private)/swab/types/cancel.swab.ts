import type { CancelSwabType } from "../validations/cancel.swab.schema";

export interface CancelSwabParams {
    id: string;
    data: CancelSwabType;
}

export interface CancelSwabResponse {
    swabId: string;
    swabLote: string;
}
