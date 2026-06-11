import { HStack, Text } from "@chakra-ui/react"
import { DataGrid, GridSlotsComponentsProps } from '@mui/x-data-grid';

interface TotalValueProps {
    total: string
}
export function FooterTable(props: NonNullable<GridSlotsComponentsProps['footer']>) {
    return (
        <HStack w={"100%"}>
            <Text>{total}</Text>
        </HStack>
    )
}