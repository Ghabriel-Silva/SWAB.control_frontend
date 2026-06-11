import {
    Badge,
    Box,
    Button,
    CloseButton,
    Dialog,
    Flex,
    Grid,
    GridItem,
    HStack,
    Icon,
    Portal,
    Separator,
    Text,
} from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";
import { SubtitleText } from "@/app/(private)/components";
import { SwabGridRow } from "../../types/swab.data-grid";

interface DialogContainerProps {
    row: SwabGridRow;
}

function InfoItem({
    label,
    value,
}: {
    label: string;
    value: string | number | null;
}) {
    return (
        <Box>
            <Text
                fontSize="xs"
                color="gray.500"
                textTransform="uppercase"
                fontWeight="medium"
            >
                {label}
            </Text>

            <Text fontSize="sm" fontWeight="semibold">
                {value ?? "-"}
            </Text>
        </Box>
    );
}

export function DialogContainer({ row }: DialogContainerProps) {
    return (
        <Dialog.Root size="xl">
            <Dialog.Trigger asChild>
                <HStack>
                    <Badge colorPalette="blue" variant="subtle">
                        <Flex
                            cursor="pointer"
                            align="center"
                            gap={1}
                            _hover={{ borderBottom: "1px solid" }}
                        >
                            <Icon fontSize="sm">
                                <MdOpenInNew />
                            </Icon>

                            <SubtitleText>
                                {row.lote}
                            </SubtitleText>
                        </Flex>
                    </Badge>
                </HStack>
            </Dialog.Trigger>

            <Portal>
                <Dialog.Backdrop />

                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Flex
                                justify="space-between"
                                align="center"
                                w="full"
                            >
                                <Box>
                                    <Dialog.Title>
                                        Detalhes do SWAB
                                    </Dialog.Title>

                                    <Text
                                        fontSize="sm"
                                        color="gray.500"
                                    >
                                        Lote {row.lote}
                                    </Text>
                                </Box>

                                <Badge
                                    colorPalette={
                                        row.resultSwab === "APPROVED"
                                            ? "green"
                                            : row.resultSwab === "REPROVED"
                                                ? "red"
                                                : "yellow"
                                    }
                                >
                                    {row.resultSwab}
                                </Badge>
                            </Flex>
                        </Dialog.Header>

                        <Dialog.Body>
                            <Flex direction="column" gap={5}>
                                {/* Informações Gerais */}
                                <Box>
                                    <Text
                                        fontWeight="bold"
                                        mb={3}
                                    >
                                        Informações Gerais
                                    </Text>

                                    <Grid
                                        templateColumns="repeat(2, 1fr)"
                                        gap={4}
                                    >
                                        <InfoItem
                                            label="Lote"
                                            value={row.lote}
                                        />

                                        <InfoItem
                                            label="Tanque / Silo"
                                            value={row.tankSilo}
                                        />

                                        <InfoItem
                                            label="Data Criação"
                                            value={row.dateHours}
                                        />

                                        <InfoItem
                                            label="Data Validação"
                                            value={row.dateHourRealization}
                                        />

                                        <InfoItem
                                            label="Tipo SWAB"
                                            value={row.typeSwab}
                                        />

                                        <InfoItem
                                            label="Analista"
                                            value={row.operator}
                                        />
                                    </Grid>
                                </Box>

                                <Separator />

                                {/* Torneiras */}
                                <Box>
                                    <Text
                                        fontWeight="bold"
                                        mb={3}
                                    >
                                        Torneiras
                                    </Text>

                                    <Grid
                                        templateColumns="repeat(2, 1fr)"
                                        gap={4}
                                    >
                                        <InfoItem
                                            label="Anterior"
                                            value={row.lastFauct}
                                        />

                                        <InfoItem
                                            label="Atual"
                                            value={row.newFaucet}
                                        />
                                    </Grid>
                                </Box>

                                <Separator />

                                {/* Resultado */}
                                <Box>
                                    <Text
                                        fontWeight="bold"
                                        mb={3}
                                    >
                                        Resultado
                                    </Text>

                                    <Grid
                                        templateColumns="repeat(2, 1fr)"
                                        gap={4}
                                    >
                                        <InfoItem
                                            label="Resultado"
                                            value={row.resultSwab}
                                        />

                                        <InfoItem
                                            label="Valor ATP"
                                            value={row.valueAtp}
                                        />

                                        <InfoItem
                                            label="Lote ATP"
                                            value={row.batch}
                                        />

                                        <InfoItem
                                            label="Cancelado"
                                            value={
                                                row.isCancelledSwab
                                                    ? "Sim"
                                                    : "Não"
                                            }
                                        />
                                    </Grid>
                                </Box>
                            </Flex>
                        </Dialog.Body>

                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">
                                    Fechar
                                </Button>
                            </Dialog.ActionTrigger>
                        </Dialog.Footer>

                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}