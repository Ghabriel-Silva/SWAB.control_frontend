import { Text, TextProps } from "@chakra-ui/react";


export const BodyText = ({ children, ...props }: TextProps) => {
    <Text fontSize={"12px"} color={"fg.subtle"} fontWeight="400" {...props}>
        {children}
    </Text>
}