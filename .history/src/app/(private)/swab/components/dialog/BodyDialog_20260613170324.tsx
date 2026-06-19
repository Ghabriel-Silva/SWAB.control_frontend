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
    NativeSelect,
    Separator,
} from "@chakra-ui/react";
import { SwabGridRow } from "../../types/swab.data-grid";
import { SpinnerLoading, StatEmpaty } from "@/app/(private)/components/index";
import { useGetSwabByLote } from "../../hooks/useGetSwabByLote";

interface DialogContainerProps {
    row: SwabGridRow;
    setIsLoadingFn: (value: boolean) => void;
}

function Label({ children }: { children: React.ReactNode }) {
    return (
        <Text fontSize="xs" color="gray.500" fontWeight="500" mb={1}>
            {children}
        </Text>
    );
}

function ReadField({ label, value }: { label: string; value?: string | null }) {
    return (
        <Box>
            <Label>{label}</Label>
            <Text fontSize="sm" fontWeight="600" color={value ? "gray.800" : "gray.400"}>
                {value ?? "—"}
            </Text>
        </Box>
    );
}

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

                    {/* Info estática */}
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
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
                        <Box>
                            <Label>Tipo</Label>
                            <Badge
                                colorPalette={swab.check?.type === "ATP" ? "yellow" : "purple"}
                                px={3} py={1} borderRadius="full" fontSize="xs"
                            >
                                {swab.check?.type ?? "—"}
                            </Badge>
                        </Box>
                    </Grid>

                    <Separator />

                    {/* Campos editáveis — 3 colunas */}
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>

                        {/* Resultado — ocupa 1 col */}
                        <Box>
                            <Label>Resultado *</Label>
                            <Flex gap={2}>
                                <Button
                                    size="xs"
                                    flex={1}
                                    variant="outline"
                                    borderColor={result === "APPROVED" ? "green.400" : "gray.200"}
                                    bg={result === "APPROVED" ? "green.50" : "white"}
                                    color={result === "APPROVED" ? "green.600" : "gray.500"}
                                    onClick={() => setResult("APPROVED")}
                                >
                                    ✓ Aprovado
                                </Button>
                                <Button
                                    size="xs"
                                    flex={1}
                                    variant="outline"
                                    borderColor={result === "REJECTED" ? "red.400" : "gray.200"}
                                    bg={result === "REJECTED" ? "red.50" : "white"}
                                    color={result === "REJECTED" ? "red.500" : "gray.500"}
                                    onClick={() => setResult("REJECTED")}
                                >
                                    ✕ Reprovado
                                </Button>
                            </Flex>
                        </Box>

                        {/* Valor ATP */}
                        <Box>
                            <Label>Valor ATP *</Label>
                            <InputGroup endElement={<InputAddon>RLU</InputAddon>}>
                                <Input
                                    size="sm"
                                    type="number"
                                    placeholder="0"
                                    value={atpValue}
                                    onChange={(e) => setAtpValue(e.target.value)}
                                />
                            </InputGroup>
                        </Box>

                        {/* Validado em */}
                        <Box>
                            <Label>Validado em</Label>
                            <Input
                                size="sm"
                                type="datetime-local"
                                value={validatedAt}
                                onChange={(e) => setValidatedAt(e.target.value)}
                            />
                        </Box>

                        {/* Operador */}
                        <Box>
                            <Label>Operador *</Label>
                            <NativeSelect.Root size="sm">
                                <NativeSelect.Field
                                    value={operator}
                                    onChange={(e) => setOperator(e.target.value)}
                                    placeholder="Selecione..."
                                >
                                    {/* substitua pela lista real */}
                                    <option value="op1">Operador 1</option>
                                    <option value="op2">Operador 2</option>
                                </NativeSelect.Field>
                                <NativeSelect.Indicator />
                            </NativeSelect.Root>
                        </Box>

                        {/* Última torneira */}
                        <Box>
                            <Label>Última Torneira *</Label>
                            <Input
                                size="sm"
                                placeholder="Informe a torneira"
                                value={lastFaucet}
                                onChange={(e) => setLastFaucet(e.target.value)}
                            />
                        </Box>

                        {/* Batch */}
                        <Box>
                            <Label>Batch <Text as="span" color="gray.400">(Opcional)</Text></Label>
                            <Input
                                size="sm"
                                placeholder="Informe o batch"
                                value={batch}
                                onChange={(e) => setBatch(e.target.value)}
                            />
                        </Box>
                    </Grid>

                    <Separator />

                    {/* Observações */}
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                        <GridItem colSpan={3}>
                            <Text fontSize="sm" fontWeight="600" color="gray.700">Observações</Text>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Label>Mesma torneira da anterior <Text as="span" color="gray.400">(Opcional)</Text></Label>
                            <Textarea
                                size="sm"
                                placeholder="Observações sobre a torneira..."
                                value={obsSameFaucet}
                                onChange={(e) => setObsSameFaucet(e.target.value)}
                                rows={3}
                                resize="vertical"
                            />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Label>Observações gerais <Text as="span" color="gray.400">(Opcional)</Text></Label>
                            <Textarea
                                size="sm"
                                placeholder="Informe observações gerais..."
                                value={obsGeneral}
                                onChange={(e) => setObsGeneral(e.target.value)}
                                rows={3}
                                resize="vertical"
                            />
                        </GridItem>
                    </Grid>

                </Flex>
            )}
        </>
    );
}