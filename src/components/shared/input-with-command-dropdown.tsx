import React, { useRef } from "react"

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { type InputProps } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface InputWithCommandDropdownProps {
  inputProps: InputProps
  content: React.ReactNode
  onSelect?: ((value: string) => void) | undefined
}

export function InputWithCommandDropdown({
  inputProps,
  content,
  onSelect,
}: any) {
  const bla = useRef<HTMLInputElement>(null)
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput autoFocus />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {memoizedDeliveryMethods?.map((method) => (
              <CommandItem key={method?.key} onSelect={onChange}>
                <DropdownMenuItem
                  textValue={""}
                  className="flex w-full cursor-pointer items-center gap-2 [&_svg]:size-4"
                >
                  {method?.label}
                </DropdownMenuItem>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
