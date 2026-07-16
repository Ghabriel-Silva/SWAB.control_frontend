import { Box } from "@chakra-ui/react"
import { SwabTable } from "../../components/table/SwabTable"
import { FilterSwab } from "./FilterSwab"



export const ContainerConsult = () => {
    return (
        <Box>
            <FilterSwab />
            {/* <SwabTable /> */}
        </Box>
    )
}