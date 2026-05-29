import { Text, TextProps } from "@chakra-ui/react";


export const SubtitleText = ({ children, ...props }: TextProps) => {
    <Text fontSize={"14px"} color={"fg.subtle"} fontWeight="400" {...props}>
        {children}
    </Text>
}