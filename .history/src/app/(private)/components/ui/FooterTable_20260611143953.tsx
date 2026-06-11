import { HStack, Text } from "@chakra-ui/react"
import { DataGrid, GridSlotsComponentsProps } from '@mui/x-data-grid';

interface FooterValue {
    total: string
}

declare module '@mui/x-data-grid' {
    interface FooterPropsOverrides {
        status: FooterValue;
    }
}
export function FooterTable(props: NonNullable<GridSlotsComponentsProps['footer']>) {
    return (
        <HStack w={"100%"}>
            <Text>{props}</Text>
        </HStack>
    )
}