"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { type Matcher, type SelectSingleEventHandler } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps
  extends React.ComponentPropsWithoutRef<typeof PopoverContent> {
  date?: Date
  dayCount?: number
  placeholder?: string
  triggerVariant?: Exclude<ButtonProps["variant"], "destructive" | "link">
  triggerSize?: Exclude<ButtonProps["size"], "icon">
  triggerClassName?: string
  onDateChange?: SelectSingleEventHandler
  calendarDisabled?: Matcher | Matcher[] | undefined
}

export function DatePicker({
  date,
  dayCount,
  placeholder = "Pick a date",
  triggerVariant = "outline",
  triggerSize = "default",
  triggerClassName,
  className,
  onDateChange,
  calendarDisabled,
  ...props
}: DatePickerProps) {
  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={triggerVariant}
            size={triggerSize}
            className={cn(
              "w-full justify-start truncate text-left font-normal",
              !date && "text-muted-foreground",
              triggerClassName
            )}
          >
            <CalendarIcon className="mr-2 size-4" />
            {date ? format(date, "LLL dd, y") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("w-auto p-0", className)} {...props}>
          <Calendar
            disabled={calendarDisabled}
            initialFocus
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={onDateChange}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
