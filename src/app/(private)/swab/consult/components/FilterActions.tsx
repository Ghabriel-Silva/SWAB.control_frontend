import {
    Box,
    Button,
    Flex,
    Spinner
} from "@chakra-ui/react";
import { FormField } from "@/app/(private)/components";
import { FiFilter } from "react-icons/fi";

interface FilterActionsProps {
    loading: boolean;
    onClear: () => void;
    disabled: boolean;
}

export function FilterActions({
    loading,
    onClear,
    disabled
}: FilterActionsProps) {
    return (
        <Box
            data-filter-actions=""
            alignSelf="start"
            flexShrink={0}
        >
            <FormField label="Ações">
                <Flex
                    h={8}
                    alignItems="center"
                    gap={2}
                    wrap="nowrap"
                >
                    <Button
                        type="button"
                        variant="outline"
                        size="xs"
                        onClick={onClear}
                    >
                        Limpar filtros
                    </Button>
                    <Button
                        type="submit"
                        bg="blue"
                        size="xs"
                        w="112px"
                        flexShrink={0}
                        aria-busy={loading}
                        disabled={disabled}
                    >
                        {loading ? <Spinner size="xs" /> : <FiFilter aria-hidden="true" />}
                        {loading ? "Filtrando..." : "Filtrar"}
                    </Button>
                </Flex>
            </FormField>
        </Box>
    )
}
