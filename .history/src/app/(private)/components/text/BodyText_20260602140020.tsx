import { Text, TextProps } from "@chakra-ui/react";


export const BodyText = ({ children, ...props }: TextProps) => {
    return (
        <Text fontSize={"14px"} color={"gray."} fontWeight="400" {...props}>
            {children}
        </Text>
    )

}