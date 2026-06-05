import { SwabCheckResult } from "@/app/(private)/types/swab"
import { Badge, Box } from "@chakra-ui/react";

interface ResultProps {
    value: SwabCheckResult
}
export const Result = ({ value }: ResultProps) => {
    const result = value

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