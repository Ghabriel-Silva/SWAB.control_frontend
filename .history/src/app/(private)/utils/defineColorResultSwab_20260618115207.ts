import { SwabCheckResult } from "../types/swab";

export const defineColorResultSwab = (v: SwabCheckResult) => {
    switch (v) {
        case SwabCheckResult.APPROVED:
            return "green";

        case SwabCheckResult.PENDING:
            return "yelo";

        case SwabCheckResult.REPROVED:
            return "red";

        default:
            return "gray";
    }
}