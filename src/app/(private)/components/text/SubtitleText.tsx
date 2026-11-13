import { Text, TextProps } from "@chakra-ui/react";


export const SubtitleText = ({ children, ...props }: TextProps) => {
    return (
        <Text fontSize={"12px"} fontWeight="400" color="fg.muted" {...props}>
            {children}
        </Text>
    )
}