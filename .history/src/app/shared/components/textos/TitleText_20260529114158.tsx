import { Text, TextProps } from "@chakra-ui/react";


export const TitleText = ({ children, ...props }: TextProps) => {
    <Text fontSize={"16px"} fontWeight="600" color="fg.muted" {...props}>
        {children}
    </Text>
}