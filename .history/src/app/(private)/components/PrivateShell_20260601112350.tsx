import { AuthProvider } from "@/permissions/auth-provider";
import { getSession } from "@/permissions/get.sessions";
import { Sidebar } from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "./Header";




export async function PrivateShell({ children }: { children: React.ReactNode }) {
    const session = await getSession()
    return (
        <AuthProvider session={session}>
            <Box height={"100vh"} width={"100vw"}>
                <Flex flexDirection={"row"}>
                    <Sidebar />
                    <Flex flexDirection={"column"} >
                        <Header />
                        {children}
                    </Flex>
                </Flex>
            </Box>
        </AuthProvider>
    )
}