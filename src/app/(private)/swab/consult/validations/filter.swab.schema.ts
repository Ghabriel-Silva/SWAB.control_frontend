import * as yup from "yup";
import { SwabCheckResult, SwabCheckType } from "../../../types/swab";

function isValidDate(value: string): boolean {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false

    const date = new Date(`${value}T00:00:00Z`)

    return Number.isFinite(date.getTime())
        && date.toISOString().slice(0, 10) === value;
}

const dateField = (label: string) =>
    yup.string()
        .trim()
        .default("")
        .test(
            "valid-date",
            `${label} deve ser uma data válida no formato YYYY-MM-DD.`,
            (value) => !value || isValidDate(value)
        )

const uuidSchema = yup.string().uuid();

const idField = (message: string) =>
    yup.string()
        .trim()
        .default("")
        .test(
            "uuid",
            message,
            (value) => !value || uuidSchema.isValidSync(value)
        );

export const filterSwabSchema = yup.object({
    areaId: idField("Selecione uma área válida."),
    locationId: idField("Selecione um local válido."),
    operatorId: idField("Selecione um operador válido."),
    performedType: yup.mixed<SwabCheckType | "">()
        .default("")
        .oneOf(
            ["", ...Object.values(SwabCheckType)],
            "Selecione um tipo de SWAB válido."
        ),
    result: yup.mixed<SwabCheckResult | "">()
        .default("")
        .oneOf(
            ["", ...Object.values(SwabCheckResult)],
            "Selecione um resultado válido."
        ),
    isCancelled: yup.string()
        .default("")
        .oneOf(
            ["", "true", "false"],
            "Selecione Todos, Sim ou Não."
        ),
    internalCode: yup.string()
        .trim()
        .default("")
        .max(
            20,
            "O código interno deve ter no máximo 20 caracteres."
        ),
    startDate: dateField("A data inicial")
        .test(
            "start-date-required",
            "Informe a data inicial ao preencher a data final.",
            function (value) {
                const { endDate } = this.parent as { endDate: string };

                return !endDate || !!value;
            }
        )
        .test(
            "date-range",
            "A data inicial deve ser igual ou anterior à data final.",
            function (value) {
                const { endDate } = this.parent as { endDate: string };

                return !value
                    || !endDate
                    || !isValidDate(value)
                    || !isValidDate(endDate)
                    || value <= endDate;
            }
        ),
    endDate: dateField("A data final"),
});

export type SwabFilterValues = yup.InferType<typeof filterSwabSchema>;
