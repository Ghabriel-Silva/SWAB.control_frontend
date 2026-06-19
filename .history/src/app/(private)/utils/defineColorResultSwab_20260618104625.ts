import { SwabCheckResult } from "../types/swab";

export const defineColorResultSwab = (v: SwabCheckResult) => {
    switch (v) {
        case SwabCheckResult.APPROVED
            : return 'green'
        case SwabCheckResult.PENDING
            : return 'blue'
        case SwabCheckResult.REPROVED
            : return 'red'
        default: return 'gray.200'
    }
}