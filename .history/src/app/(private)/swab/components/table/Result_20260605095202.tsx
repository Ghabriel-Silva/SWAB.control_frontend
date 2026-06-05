import { SwabCheckResult } from "@/app/(private)/types/swab"

interface ResultProps {
    value: SwabCheckResult
}
export const Result = ({ value }: ResultProps) => {
    const result = params.value

    const color =
        result === SwabCheckResult.APPROVED
            ? "green"
            : result === SwabCheckResult.PENDING
                ? "yellow"
                : "red";

    return (
        <Box>
            <Badge colorPalette={color}>
                {result}
            </Badge>
        </Box>
    );
}