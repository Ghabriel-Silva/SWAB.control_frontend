import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}
export function ContainerRow({ children }: ContainerProps) {
    return (
        <VStack height={"100%"} justifyContent={"center"}>
            {children}
        </VStack>
    )''
}