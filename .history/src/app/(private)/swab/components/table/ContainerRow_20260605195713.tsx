import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}
export function ContainerRow({ children }: ContainerProps) {
    return (
        <VStack height={"100%"} justifyContent={"center"}>
           
        </VStack>
    )
}