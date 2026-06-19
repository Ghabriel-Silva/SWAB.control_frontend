import {
    Badge,
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputRightAddon,
    Select,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import {
    SpinnerLoading,
    StatEmpaty,
} from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow;
    setIsLoadingFn: (value: boolean) => void;
}

// ── helpers ────────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <Text fontSize="xs" fontWeight="600" color="gray.500" mb={1} letterSpacing="wide" textTransform="uppercase">
            {children}
        </Text>
    );
}

function StaticValue({ children }: { children: React.ReactNode }) {
    return (
        <Text fontSize="sm" fontWeight="500" color="gray.800">
            {children ?? <Text as="span" color="gray.400">—</Text>}
        </Text>
    );
}

function StatCard({ label, value, highlight }: { label: string; value?: string | null; highlight?: boolean }) {
    return (
        <Box
            bg="gray.50"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            px={4}
            py={3}
            minW={0}
        >
            <SectionLabel>{label}</SectionLabel>
            <Text
                fontSize="sm"
                fontWeight="600"
                color={highlight ? "blue.600" : "gray.800"}
                isTruncated
            >
                {value ?? <Text as="span" color="gray.400" fontWeight="400">—</Text>}
            </Text>
        </Box>
    );
}

function ResultButton({
    label,
    active,
    variant,
    onClick,
}: {
    label: string;
    active: boolean;
    variant: "approved" | "rejected";
    onClick: () => void;
}) {
    const colors = {
        approved: {
            border: "green.400",
            bg: active ? "green.50" : "white",
            color: active ? "green.600" : "gray.500",
        },
        rejected: {
            border: "red.400",
            bg: active ? "red.50" : "white",
            color: active ? "red.500" : "gray.500",
        },
    };
    const c = colors[variant];
    return (
        <Button
            variant="outline"
            borderColor={active ? c.border : "gray.200"}
            bg={c.bg}
            color={c.color}
            fontWeight="600"
            size="sm"
            flex={1}
            onClick={onClick}
            _hover={{ bg: active ? c.bg : "gray.50" }}
        >
            {label}
        </Button>
    );
}

// ── main component ─────────────────────────────────────────────────────────────

export function BodyDialog({ row, setIsLoadingFn }: DialogContainerProps) {
    const { data, isLoading } = useGetSwabByLote(row.lote);
    const swab = data ? data.data[0] : undefined;

    // form state (controlled) — replace with react-hook-form if preferred
    const [result, setResult] = React.useState<"APPROVED" | "REJECTED" | null>(null);
    const [atpValue, setAtpValue] = React.useState("");
    const [operator, setOperator] = React.useState("");
    const [lastFaucet, setLastFaucet] = React.useState("");
    const [batch, setBatch] = React.useState("");
    const [validatedAt, setValidatedAt] = React.useState("");
    const [obsSameFaucet, setObsSameFaucet] = React.useState("");
    const [obsGeneral, setObsGeneral] = React.useState("");

    if (isLoading || !swab) setIsLoadingFn(true);
    else setIsLoadingFn(false);

    return (
        <>
            {isLoading && <SpinnerLoading text="Carregando Swab..." />}

            {!swab && !isLoading && (
                <StatEmpaty
                    title="Erro ao carregar dados"
                    description="Não foi possível carregar dados do swab, atualize e tente novamente."
                />
            )}

            {!isLoading && swab && (
                <Flex direction="column" gap={5}>

                    {/* ── static info strip ──────────────────────────────── */}
                    <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                        <StatCard label="Internal Code" value={swab.internalCode} highlight />
                        <StatCard label="Faucet Code" value={swab.faucetCode} />
                        <StatCard label="Tanque" value={swab.tank?.name} />
                        <StatCard
                            label="Criado em"
                            value={swab.createdAt
                                ? new Date(swab.createdAt).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })
                                : undefined}
                        />
                        <StatCard
                            label="Atualizado em"
                            value={swab.updatedAt
                                ? new Date(swab.updatedAt).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })
                                : undefined}
                        />
                    </Grid>

                    <Divider />

                    {/* ── check info: tipo + resultado + valor ATP ────────── */}
                    <Grid templateColumns="1fr 1fr" gap={5}>

                        {/* tipo (badge, read-only) */}
                        <FormControl>
                            <FormLabel fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase" letterSpacing="wide">
                                Tipo
                            </FormLabel>
                            <Flex align="center" h="36px">
                                <Badge
                                    colorScheme={swab.check?.type === "ATP" ? "yellow" : "purple"}
                                    fontSize="xs"
                                    px={3}
                                    py={1}
                                    borderRadius="full"
                                >
                                    {swab.check?.type ?? "—"}
                                </Badge>
                            </Flex>
                        </FormControl>

                        {/* valor ATP */}
                        <FormControl isRequired>
                            <FormLabel fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase" letterSpacing="wide">
                                Valor ATP
                            </FormLabel>
                            <InputGroup size="sm">
                                <Input
                                    placeholder="Informe o valor ATP"
                                    value={atpValue}
                                    onChange={(e) => setAtpValue(e.target.value)}
                                    borderRadius="md"
                                    type="number"
                                />
                                <InputRightAddon borderRadius="md">RLU</InputRightAddon>
                            </InputGroup>
                        </FormControl>

                        {/* resultado */}
                        <FormControl isRequired>
                            <FormLabel fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase" letterSpacing="wide">
                                Resultado
                            </FormLabel>
                            <Flex gap={2}>
                                <ResultButton
                                    label="✓  Aprovado"
                                    active={result === "APPROVED"}
                                    variant="approved"
                                    onClick={() => setResult("APPROVED")}
                                />
                                <ResultButton
                                    label="✕  Reprovado"
                                    active={result === "REJECTED"}
                                    variant="rejected"
                                    onClick={() => setResult("REJECTED")}
                                />
                            </Flex>
                        </FormControl>

                        {/* validatedAt */}
                        <FormControl>
                            <FormLabel fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase" letterSpacing="wide">
                                Validado em
                            </FormLabel>
                            <Input
                                size="sm"
                                type="datetime-local"
                                value={validatedAt}
                                onChange={(e) => setValidatedAt(e.target.value)}
                                borderRadius="md"
                            />
                        </FormControl>
                    </Grid>

                    <Divider />

                    {/* ── operator / lastFaucet / batch ──────────────────── */}
                    <Grid templateColumns="1fr 1fr" gap={5}>

                        <FormControl isRequired>
                            <FormLabel fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase" letterSpacing="wide">
                                Operador
                            </FormLabel>
                            <Select
                                size="sm"
                                placeholder="Selecione o operador"
                                value={operator}
                                onChange={(e) => setOperator(e.target.value)}
                                borderRadius="md"
                            >
                                {/* Populate from your operators list */}
                                <option value="op1">Operador 1</option>
                                <option value="op2">Operador 2</option>
                            </Select>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase" letterSpacing="wide">
                                Última torneira
                            </FormLabel>
                            <Input
                                size="sm"
                                placeholder="Informe a última torneira"
                                value={lastFaucet}
                                onChange={(e) => setLastFaucet(e.target.value)}
                                borderRadius="md"
                            />
                        </FormControl>

                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase" letterSpacing="wide">
                                    Batch <Text as="span" fontWeight="400" textTransform="none" color="gray.400">(Opcional)</Text>
                                </FormLabel>
                                <Input
                                    size="sm"
                                    placeholder="Informe o batch"
                                    value={batch}
                                    onChange={(e) => setBatch(e.target.value)}
                                    borderRadius="md"
                                />
                            </FormControl>
                        </GridItem>
                    </Grid>

                    <Divider />

                    {/* ── observações ────────────────────────────────────── */}
                    <Box>
                        <Text fontWeight="700" fontSize="sm" color="gray.700" mb={3}>
                            Observações
                        </Text>
                        <Grid templateColumns="1fr 1fr" gap={5}>
                            <FormControl>
                                <FormLabel fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase" letterSpacing="wide">
                                    Mesma torneira da anterior <Text as="span" fontWeight="400" textTransform="none" color="gray.400">(Opcional)</Text>
                                </FormLabel>
                                <Textarea
                                    size="sm"
                                    placeholder="Observações sobre a mesma torneira"
                                    value={obsSameFaucet}
                                    onChange={(e) => setObsSameFaucet(e.target.value)}
                                    borderRadius="md"
                                    rows={3}
                                    resize="vertical"
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase" letterSpacing="wide">
                                    Observações gerais <Text as="span" fontWeight="400" textTransform="none" color="gray.400">(Opcional)</Text>
                                </FormLabel>
                                <Textarea
                                    size="sm"
                                    placeholder="Informe observações gerais"
                                    value={obsGeneral}
                                    onChange={(e) => setObsGeneral(e.target.value)}
                                    borderRadius="md"
                                    rows={3}
                                    resize="vertical"
                                />
                            </FormControl>
                        </Grid>
                    </Box>

                </Flex>
            )}
        </>
    );
}