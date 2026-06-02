
import { Box, Flex, Icon, HStack, Text, VStack, Button } from "@chakra-ui/react";

export function Header() {
    const [slider, setSlider] = useState(false)
    const SIDEBAR_TRANSITION = "0.3s ease";

    const user = useAuth()
    
    const userName = user.user?.userName ?? "USUÀRIO"
    return (
        <>
            <HStack
                borderBottom={"black"}
                height={"60px"}
                p={6}
                borderBottomWidth="1px"
                borderBottomStyle="solid"
                borderBottomColor="gray.muted"
                gap={6}
            >
                <Icon
                    cursor={"e-resize"}
                    onClick={() => setSlider(prev => !prev)}
                    color="fg.muted"
                    _hover={{ color: "accent.fg" }}
                    transition="color 0.2s ease, transform 0.3s ease"
                    transform={slider ? "rotate(180deg)" : "rotate(0)"}
                >
                    <BsLayoutSidebarInset />
                </Icon>
                <Text color="fg.subtle">|</Text>
                <SubtitleText>
                    {getInitials(userName)}
                </SubtitleText>
                <Text color="fg.subtle" >—</Text>
                <SubtitleText>
                    {userName}
                </SubtitleText>

                <Box>
                    <Can roleUser={Role.LAB}>
                        <Button colorPalette={"red"}>APenas lab ve isso</Button>
                    </Can>
                    <Can roleUser={Role.ADMIN}>
                        <Button colorPalette={"green"}>APenas Admin ve esse botão</Button>
                    </Can>
                </Box>
            </HStack>
        </>
    )
}