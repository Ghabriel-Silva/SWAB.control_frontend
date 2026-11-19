"use client"

import { Button, DatePicker, Input, Portal } from "@chakra-ui/react"
import {
    CalendarDateTime,
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
} from "@internationalized/date"
import { Controller, useFormContext } from "react-hook-form"
import { LuCalendar } from "react-icons/lu"
import { UpdateSwabType } from "../../validations/update.swab.schema"

const formatter = new DateFormatter("pt-BR", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
})


export const Calendar = ({ disabled = false }: { disabled?: boolean }) => {
    const { control } = useFormContext<UpdateSwabType>()
    return (
        <Controller

            control={control}
            name="validatedAt"
            render={({ field }) => {
                const value = field.value
                    ? [new CalendarDateTime(
                        field.value.getFullYear(),
                        field.value.getMonth() + 1,
                        field.value.getDate(),
                        field.value.getHours(),
                        field.value.getMinutes(),
                        field.value.getSeconds(),
                        field.value.getMilliseconds()
                    )]
                    : []

                const timeValue = value[0]
                    ? `${String(value[0].hour).padStart(2, "0")}:${String(value[0].minute).padStart(2, "0")}`
                    : ""

                const onDateChange = (details: { value: DateValue[] }) => {
                    const newDate = details.value[0]
                    if (!newDate) {
                        field.onChange(undefined)
                        return
                    }

                    const prev = field.value ?? new Date()

                    const next = new Date(prev)
                    next.setFullYear(newDate.year, newDate.month - 1, newDate.day)
                    field.onChange(next)
                }

                const onTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const [hours, minutes] = e.target.value.split(":").map(Number)

                    const current = field.value ?? new Date()

                    const newDate = new Date(current)
                    newDate.setHours(hours)
                    newDate.setMinutes(minutes)

                    field.onChange(newDate)
                }

                return (
                    <DatePicker.Root
                        _disabled={{ opacity: '0.9' }}
                        disabled={disabled}
                        maxWidth="20rem"
                        size={"xs"}
                        variant={"outline"}
                        value={value}
                        onValueChange={onDateChange}
                        closeOnSelect={false}
                    >
                        <DatePicker.Control overflow={'hidden'}>
                            <DatePicker.Trigger asChild unstyled>
                                <Button variant="outline" width="full" justifyContent="space-between" size={"xs"}>
                                    {value[0]
                                        ? formatter.format(value[0].toDate(getLocalTimeZone()))
                                        : "Selecione a data"}
                                    <LuCalendar />
                                </Button>
                            </DatePicker.Trigger>
                        </DatePicker.Control>
                        <Portal>
                            <DatePicker.Positioner>
                                <DatePicker.Content >
                                    <DatePicker.View view="day" >
                                        <DatePicker.Header />
                                        <DatePicker.DayTable />
                                        <Input

                                            type="time"
                                            disabled={disabled}
                                            value={timeValue}
                                            onChange={onTimeChange}
                                        />
                                    </DatePicker.View>
                                </DatePicker.Content>
                            </DatePicker.Positioner>
                        </Portal>
                    </DatePicker.Root>
                )
            }}
        />
    )
}

