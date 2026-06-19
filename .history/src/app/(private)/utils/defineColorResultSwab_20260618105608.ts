import { SwabCheckResult } from "../types/swab";

export const defineColorResultSwab = (v: SwabCheckResult) => {
    switch (v) {
        case SwabCheckResult.APPROVED:
            return "green";

        case SwabCheckResult.PENDING:
            return "orange";

        case SwabCheckResult.REPROVED:
            return "red";

        default:
            return "gray";
    }
};