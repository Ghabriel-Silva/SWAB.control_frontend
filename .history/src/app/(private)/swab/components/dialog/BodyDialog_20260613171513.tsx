import { useState } from "react";
import {
    Badge,
    Box,
    Button,
    Dialog,
    Flex,
    Grid,
    IconButton,
    Input,
    Text,
    Textarea,
    NativeSelect,
    Separator,
    Portal,
    Icon,
} from "@chakra-ui/react";
import { LuMessageSquare } from "react-icons/lu";
import { SwabGridRow } from "../../types/swab.data-grid";
import { SpinnerLoading, StatEmpaty } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow;
    setIsLoadingFn: (value: boolean) => void;
}

const CHECK_TYPES = ["ATP", "VISUAL", "MICRO"] as const;
type CheckType = typeof CHECK_TYPES[number];

const TYPE_PALETTE: Record<CheckType, string> = {
    ATP: "yellow",
    VISUAL: "purple",
    MICRO: "blue",
};

function Label({ children }: { children: React.ReactNode }) {
    return (
        <Text fontSize="12px" color="gray.400" fontWeight="500" mb="4px">
            {children}
        </Text>
    );
}

function ReadField({ label, value }: { label: string; value?: string | null }) {
    return (
        <Box>
            <Label>{label}</Label>
            <Text fontSize="14px" fontWeight="500" color={value ? "gray.800" : "gray.300"}>
                {value ?? "—"}
            </Text>
        </Box>
    );
}

// Modal de observação da torneira
function FaucetObsDialog({
    value,
    onChange,
}: {
    value: string;
    onChange: (v: string) => void;
}) {
    const [open, setOpen] = useState(false);
    const [draft, setDraft] = useState(value);

    function handleSave() {
        onChange(draft);
        setOpen(false);
    }

    function handleOpen() {
        setDraft(value);
        setOpen(true);
    }

    return (
        <>
            <IconButton
                aria-label="Observação da torneira"
                size="2xs"
                variant="ghost"
                color={value ? "blue.400" : "gray.300"}
                onClick={handleOpen}
                mt="1px"
            >
                <Icon as={LuMessageSquare} boxSize="13px" />
            </IconButton>

            <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)} size="sm">
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content borderRadius="xl" p={5} gap={4}>
                            <Dialog.Title fontSize="14px" fontWeight="600" color="gray.700">
                                Observação — Mesma Torneira
                            </Dialog.Title>
                            <Textarea
                                size="sm"
                                fontSize="14px"
                                placeholder="Descreva a observação sobre a torneira..."
                                value={draft}
                                onChange={(e) => setDraft(e.target.value)}
                                rows={4}
                                resize="none"
                                borderColor="gray.200"
                                _placeholder={{ color: "gray.300" }}
                                autoFocus
                            />
                            <Flex justify="flex-end" gap={2}>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    color="gray.500"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancelar
                                </Button>
                                <Button size="sm" colorPalette="blue" onClick={handleSave}>
                                    Salvar
                                </Button>
                            </Flex>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </>
    );
}

export function BodyDialog({ row, setIsLoadingFn }: DialogContainerProps) {
    const { data, isLoading } = useGetSwabByLote(row.lote);
    const swab = data ? data.data[0] : undefined;

    const [result, setResult] = useState<"APPROVED" | "REJECTED" | null>(null);
    const [atpValue, setAtpValue] = useState("");
    const [checkType, setCheckType] = useState<CheckType>(
        (swab?.check?.type as CheckType) ?? "ATP"
    );
    const [operator, setOperator] = useState("");
    const [lastFaucet, setLastFaucet] = useState("");
    const [obsSameFaucet, setObsSameFaucet] = useState("");
    const [batch, setBatch] = useState("");
    const [validatedAt, setValidatedAt] = useState("");
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
                <Flex direction="column" gap={6}>

                    {/* Info estática */}
                    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                        <ReadField label="Internal Code" value={swab.internalCode} />
                        <ReadField label="Faucet Code" value={swab.faucetCode} />
                        <ReadField label="Tanque" value={swab.tank?.name} />
                        <ReadField
                            label="Criado em"
                            value={swab.createdAt
                                ? new Date(swab.createdAt).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })
                                : undefined}
                        />
                        <ReadField
                            label="Atualizado em"
                            value={swab.updatedAt
                                ? new Date(swab.updatedAt).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })
                                : undefined}
                        />
                    </Grid>

                    <Separator borderColor="gray.100" />

                    {/* Campos editáveis */}
                    <Grid templateColumns="repeat(3, 1fr)" gap={5}>

                        {/* Tipo */}
                        <Box>
                            <Label>Tipo</Label>
                            <Flex align="center" gap={2}>
                                <NativeSelect.Root size="sm" flex={1}>
                                    <NativeSelect.Field
                                        value={checkType}
                                        onChange={(e) => setCheckType(e.target.value as CheckType)}
                                        fontSize="14px"
                                        borderColor="gray.200"
                                    >
                                        {CHECK_TYPES.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                                <Badge
                                    colorPalette={TYPE_PALETTE[checkType]}
                                    px={2} py="2px" borderRadius="full" fontSize="11px"
                                >
                                    {checkType}
                                </Badge>
                            </Flex>
                        </Box>

                        {/* Resultado */}
                        <Box>
                            <Label>Resultado</Label>
                            <Flex gap={2}>
                                <Button
                                    size="xs" flex={1} variant="outline"
                                    borderColor={result === "APPROVED" ? "green.400" : "gray.200"}
                                    bg={result === "APPROVED" ? "green.50" : "transparent"}
                                    color={result === "APPROVED" ? "green.600" : "gray.400"}
                                    fontSize="12px" fontWeight="500"
                                    onClick={() => setResult("APPROVED")}
                                >
                                    ✓ Aprovado
                                </Button>
                                <Button
                                    size="xs" flex={1} variant="outline"
                                    borderColor={result === "REJECTED" ? "red.300" : "gray.200"}
                                    bg={result === "REJECTED" ? "red.50" : "transparent"}
                                    color={result === "REJECTED" ? "red.500" : "gray.400"}
                                    fontSize="12px" fontWeight="500"
                                    onClick={() => setResult("REJECTED")}
                                >
                                    ✕ Reprovado
                                </Button>
                            </Flex>
                        </Box>

                        {/* Valor ATP */}
                        <Box>
                            <Label>Valor ATP</Label>
                            <Flex align="center" gap={1}>
                                <Input
                                    size="sm" type="number" placeholder="0"
                                    fontSize="14px" flex={1}
                                    value={atpValue}
                                    onChange={(e) => setAtpValue(e.target.value)}
                                    borderColor="gray.200"
                                    _placeholder={{ color: "gray.300" }}
                                />
                                <Text fontSize="12px" color="gray.400" whiteSpace="nowrap">RLU</Text>
                            </Flex>
                        </Box>

                        {/* Operador */}
                        <Box>
                            <Label>Operador</Label>
                            <NativeSelect.Root size="sm">
                                <NativeSelect.Field
                                    value={operator}
                                    onChange={(e) => setOperator(e.target.value)}
                                    placeholder="Selecione..."
                                    fontSize="14px"
                                    borderColor="gray.200"
                                >
                                    <option value="op1">Operador 1</option>
                                    <option value="op2">Operador 2</option>
                                </NativeSelect.Field>
                                <NativeSelect.Indicator />
                            </NativeSelect.Root>
                        </Box>

                        {/* Última Torneira + ícone de obs */}
                        <Box>
                            <Label>Última Torneira</Label>
                            <Flex align="center" gap={1}>
                                <Input
                                    size="sm"
                                    placeholder="Informe a torneira"
                                    fontSize="14px"
                                    flex={1}
                                    value={lastFaucet}
                                    onChange={(e) => setLastFaucet(e.target.value)}
                                    borderColor="gray.200"
                                    _placeholder={{ color: "gray.300" }}
                                />
                                <FaucetObsDialog
                                    value={obsSameFaucet}
                                    onChange={setObsSameFaucet}
                                />
                            </Flex>
                        </Box>

                        {/* Batch */}
                        <Box>
                            <Label>Batch <Text as="span" color="gray.300">(Opcional)</Text></Label>
                            <Input
                                size="sm"
                                placeholder="Informe o batch"
                                fontSize="14px"
                                value={batch}
                                onChange={(e) => setBatch(e.target.value)}
                                borderColor="gray.200"
                                _placeholder={{ color: "gray.300" }}
                            />
                        </Box>

                        {/* Validado em */}
                        <Box>
                            <Label>Validado em</Label>
                            <Input
                                size="sm" type="datetime-local" fontSize="14px"
                                value={validatedAt}
                                onChange={(e) => setValidatedAt(e.target.value)}
                                borderColor="gray.200"
                            />
                        </Box>
                    </Grid>

                    <Separator borderColor="gray.100" />

                    {/* Observações gerais */}
                    <Box>
                        <Label>
                            Observações gerais{" "}
                            <Text as="span" color="gray.300">(Opcional)</Text>
                        </Label>
                        <Textarea
                            size="sm"
                            placeholder="Observações gerais..."
                            fontSize="14px"
                            value={obsGeneral}
                            onChange={(e) => setObsGeneral(e.target.value)}
                            rows={3}
                            resize="none"
                            borderColor="gray.200"
                            _placeholder={{ color: "gray.300" }}
                        />
                    </Box>

                </Flex>
            )}
        </>
    );
}