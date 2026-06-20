import { Text, TextProps } from "@chakra-ui/react";


export const BodyText = ({ children, ...props }: TextProps) => {
    return (
        <Text fontSize={"12px"} color={"gray.fg"} fontWeight="400" {...props}>
            {children}
        </Text>
    )

}