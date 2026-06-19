import { useState } from "react";
import {
    Badge,
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Input,
    InputAddon,
    InputGroup,
    Text,
    Textarea,
    Stack,
    NativeSelect,
    Separator,
    Field,
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
        <Text
            fontSize="xs"
            fontWeight="600"
            color="gray.500"
            mb={1}
            letterSpacing="wide"
            textTransform="uppercase"
        >
            {children}
        </Text>
    );
}

function StatCard({
    label,
    value,
    highlight,
}: {
    label: string;
    value?: string | null;
    highlight?: boolean;
}) {
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
                truncate
            >
                {value ?? (
                    <Text as="span" color="gray.400" fontWeight="400">
                        —
                    </Text>
                )}
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
            border: active ? "green.400" : "gray.200",
            bg: active ? "green.50" : "white",
            color: active ? "green.600" : "gray.500",
        },
        rejected: {
            border: active ? "red.400" : "gray.200",
            bg: active ? "red.50" : "white",
            color: active ? "red.500" : "gray.500",
        },
    };
    const c = colors[variant];
    return (
        <Button
            variant="outline"
            borderColor={c.border}
            bg={c.bg}
            color={c.color}
            fontWeight="600"
            size="sm"
            flex={1}
            onClick={onClick}
        >
            {label}
        </Button>
    );
}

// ── main component ─────────────────────────────────────────────────────────────

export function BodyDialog({ row, setIsLoadingFn }: DialogContainerProps) {
    const { data, isLoading } = useGetSwabByLote(row.lote);
    const swab = data ? data.data[0] : undefined;

    const [result, setResult] = useState<"APPROVED" | "REJECTED" | null>(null);
    const [atpValue, setAtpValue] = useState("");
    const [operator, setOperator] = useState("");
    const [lastFaucet, setLastFaucet] = useState("");
    const [batch, setBatch] = useState("");
    const [validatedAt, setValidatedAt] = useState("");
    const [obsSameFaucet, setObsSameFaucet] = useState("");
    const [obsGeneral, setObsGeneral] = useState("");

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
                            value={
                                swab.createdAt
                                    ? new Date(swab.createdAt).toLocaleString("pt-BR", {
                                        dateStyle: "short",
                                        timeStyle: "short",
                                    })
                                    : undefined
                            }
                        />
                        <StatCard
                            label="Atualizado em"
                            value={
                                swab.updatedAt
                                    ? new Date(swab.updatedAt).toLocaleString("pt-BR", {
                                        dateStyle: "short",
                                        timeStyle: "short",
                                    })
                                    : undefined
                            }
                        />
                    </Grid>

                    <Separator />

                    {/* ── check: tipo + resultado + valor ATP + validatedAt ── */}
                    <Grid templateColumns="1fr 1fr" gap={5}>

                        {/* Tipo — read-only badge */}
                        <Box>
                            <SectionLabel>Tipo</SectionLabel>
                            <Flex align="center" h="36px">
                                <Badge
                                    colorPalette={swab.check?.type === "ATP" ? "yellow" : "purple"}
                                    size="sm"
                                    px={3}
                                    py={1}
                                    borderRadius="full"
                                >
                                    {swab.check?.type ?? "—"}
                                </Badge>
                            </Flex>
                        </Box>

                        {/* Valor ATP */}
                        <Field.Root required>
                            <Field.Label>
                                <SectionLabel>Valor ATP</SectionLabel>
                            </Field.Label>
                            <InputGroup
                                endElement={
                                    <InputAddon>RLU</InputAddon>
                                }
                            >
                                <Input
                                    placeholder="Informe o valor ATP"
                                    value={atpValue}
                                    onChange={(e) => setAtpValue(e.target.value)}
                                    size="sm"
                                    type="number"
                                />
                            </InputGroup>
                        </Field.Root>

                        {/* Resultado */}
                        <Box>
                            <SectionLabel>Resultado *</SectionLabel>
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
                        </Box>

                        {/* Validado em */}
                        <Box>
                            <SectionLabel>Validado em</SectionLabel>
                            <Input
                                size="sm"
                                type="datetime-local"
                                value={validatedAt}
                                onChange={(e) => setValidatedAt(e.target.value)}
                            />
                        </Box>
                    </Grid>

                    <Separator />

                    {/* ── operador / última torneira / batch ─────────────── */}
                    <Grid templateColumns="1fr 1fr" gap={5}>

                        <Box>
                            <SectionLabel>Operador *</SectionLabel>
                            <NativeSelect.Root size="sm">
                                <NativeSelect.Field
                                    value={operator}
                                    onChange={(e) => setOperator(e.target.value)}
                                    placeholder="Selecione o operador"
                                >
                                    {/* substitua pela sua lista real de operadores */}
                                    <option value="op1">Operador 1</option>
                                    <option value="op2">Operador 2</option>
                                </NativeSelect.Field>
                                <NativeSelect.Indicator />
                            </NativeSelect.Root>
                        </Box>

                        <Box>
                            <SectionLabel>Última Torneira *</SectionLabel>
                            <Input
                                size="sm"
                                placeholder="Informe a última torneira"
                                value={lastFaucet}
                                onChange={(e) => setLastFaucet(e.target.value)}
                            />
                        </Box>

                        <GridItem colSpan={2}>
                            <SectionLabel>
                                Batch{" "}
                                <Text as="span" fontWeight="400" textTransform="none" color="gray.400">
                                    (Opcional)
                                </Text>
                            </SectionLabel>
                            <Input
                                size="sm"
                                placeholder="Informe o batch"
                                value={batch}
                                onChange={(e) => setBatch(e.target.value)}
                            />
                        </GridItem>
                    </Grid>

                    <Separator />

                    {/* ── observações ────────────────────────────────────── */}
                    <Stack gap={3}>
                        <Text fontWeight="700" fontSize="sm" color="gray.700">
                            Observações
                        </Text>
                        <Grid templateColumns="1fr 1fr" gap={5}>
                            <Box>
                                <SectionLabel>
                                    Mesma torneira da anterior{" "}
                                    <Text as="span" fontWeight="400" textTransform="none" color="gray.400">
                                        (Opcional)
                                    </Text>
                                </SectionLabel>
                                <Textarea
                                    size="sm"
                                    placeholder="Observações sobre a mesma torneira"
                                    value={obsSameFaucet}
                                    onChange={(e) => setObsSameFaucet(e.target.value)}
                                    rows={3}
                                    resize="vertical"
                                />
                            </Box>

                            <Box>
                                <SectionLabel>
                                    Observações gerais{" "}
                                    <Text as="span" fontWeight="400" textTransform="none" color="gray.400">
                                        (Opcional)
                                    </Text>
                                </SectionLabel>
                                <Textarea
                                    size="sm"
                                    placeholder="Informe observações gerais"
                                    value={obsGeneral}
                                    onChange={(e) => setObsGeneral(e.target.value)}
                                    rows={3}
                                    resize="vertical"
                                />
                            </Box>
                        </Grid>
                    </Stack>

                </Flex>
            )}
        </>
    );
}