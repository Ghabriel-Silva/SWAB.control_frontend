import { format, subDays } from "date-fns";

export function getDefaultDateRange(today = new Date()) {
    return {
        startDate: format(subDays(today, 30), "yyyy-MM-dd"),
        endDate: format(today, "yyyy-MM-dd"),
    };
}
