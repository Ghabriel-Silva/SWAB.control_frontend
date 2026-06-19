"use client"

import { Button, DatePicker, Input, parseDate, Portal } from "@chakra-ui/react"
import {
    CalendarDateTime,
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
} from "@internationalized/date"
import { useState } from "react"
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

interface DateProps {
    valueDate: Date
}

export const Calendar = ({ valueDate }: DateProps) => {
   
    return (
        <Controller
            control={control}
            name="validatedAt"
            render={({ field }) => (
                <DatePicker.Root
                    value={field.value ? [parseDate(field.value)] : []}
                    onValueChange={onDateChange}
                    closeOnSelect={false}
                    maxWidth="20rem"
                    size={"xs"}
                    variant={"outline"}
                >
                    <DatePicker.Control>
                        <DatePicker.Trigger asChild unstyled>
                            <Button variant="outline" width="full" justifyContent="space-between" size={"xs"}>
                                {value[0]
                                    ? formatter.format(value[0].toDate(getLocalTimeZone()))
                                    : "Select date and time"}
                                <LuCalendar />
                            </Button>
                        </DatePicker.Trigger>
                    </DatePicker.Control>
                    <Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Content>
                                <DatePicker.View view="day">
                                    <DatePicker.Header />
                                    <DatePicker.DayTable />
                                    <Input type="time" value={timeValue} onChange={onTimeChange} />
                                </DatePicker.View>
                            </DatePicker.Content>
                        </DatePicker.Positioner>
                    </Portal>
                </DatePicker.Root>
            )}
        />
    )
}
