import { Text, TextProps } from "@chakra-ui/react";


export const TitleText = ({ children, ...props }: TextProps) => {
    return (
        <Text fontSize={"16px"} fontWeight="600" color="fg" {...props}>
            {children}
        </Text>
    )
}