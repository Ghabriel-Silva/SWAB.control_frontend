'use client'
import { Box, Flex, Icon, HStack, Text, VStack, Button } from "@chakra-ui/react";

export function Sidebar() {
    return (
         <Box
                           bg={"#122136"}
                           w={slider ? "0px" : "250px"}
                           transition={`width ${SIDEBAR_TRANSITION}`}
                           height={"100vh"}
                           overflow={"hidden"}
                           flexShrink={0}
                       >
                           <VStack w={"250px"} p={4} align={"start"}
                               borderBottomWidth="1px"
                               borderBottomStyle="solid"
                               borderBottomColor="#22344F">
                               <HStack w={"100%"}>
                                   <Image
                                       src={iconSwab}
                                       alt="imagem conceitual de pessoa fazendo swab"
                                       width={"35"}
                                       priority
                                   />
                                   <VStack align={"start"} gap={0}>
                                       <Text color={"whiteAlpha.900"} fontSize={"14px"} fontWeight={"bold"}>SwabControl</Text>
                                       <Text color={"whiteAlpha.600"} fontSize={"11px"} fontWeight={"light"}>GESTÃO DE SWABS</Text>
                                   </VStack>
                               </HStack>
       
                               <VStack>
       
                               </VStack>
                           </VStack>
                       </Box>
                       <Box flex={1}>
    )
}