import React, { useState } from "react"

import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command"
import { Input, type InputProps } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface InputWithCommandProps {
  inputProps: InputProps
  content: React.ReactNode
}

export function InputWithCommand({
  inputProps,
  content,
}: InputWithCommandProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover modal open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full focus-visible:outline-none">
        <Input
          readOnly
          {...inputProps}
          className={cn("w-full truncate text-start", inputProps?.className)}
        />
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popper-available-height)]">
        <Command
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setOpen(false)
            }
          }}
        >
          <CommandInput autoFocus />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {content}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
