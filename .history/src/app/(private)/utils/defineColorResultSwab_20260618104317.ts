import { SwabCheckResult } from "../types/swab";

export const defineColorResultSwab = (v: SwabCheckResult) => {
    switch (v) {
        case SwabCheckResult.APPROVED
            : return 'green'
            break,
        case SwabCheckResult.PENDING
            : return 'blue'
    }
}