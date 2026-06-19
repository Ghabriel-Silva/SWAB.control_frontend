export const defineColorResultSwab = (v: SwabCheckResult) => {
    switch (v) {
        case SwabCheckResult.APPROVED:
            return "green.500";

        case SwabCheckResult.PENDING:
            return "orange.500";

        case SwabCheckResult.REPROVED:
            return "red.500";

        default:
            return "gray.400";
    }
};