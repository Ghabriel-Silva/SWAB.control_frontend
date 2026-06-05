import { SubtitleText } from "@/app/(private)/components/index";
import { SwabCheckResult } from "@/app/(private)/types/swab"
import { Badge, Box } from "@chakra-ui/react";
import { ValueDataGridColumn } from "../../types/value.data-grid.column";


export const Result = ({ value }: ValueDataGridColumn) => {
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
                <SubtitleText>
                    {result}
                </SubtitleText>

            </Badge>
        </Box>
    );
}