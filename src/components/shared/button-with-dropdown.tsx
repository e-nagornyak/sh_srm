import * as React from "react"
import { type ReactNode } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ButtonWithDropdownProps {
  buttonContent: ReactNode
  dropdownContent: ReactNode
  //
  buttonProps?: ButtonProps
  triggerProps?: ButtonProps
}

export function ButtonWithDropdown({
  buttonProps,
  triggerProps,
  dropdownContent,
  buttonContent,
}: ButtonWithDropdownProps) {
  return (
    <div>
      <Button
        size="sm"
        {...buttonProps}
        className={cn(
          "gap-2 rounded-2xl rounded-r-none",
          buttonProps?.className
        )}
      >
        {buttonContent}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            {...triggerProps}
            className={cn(
              "rounded-none rounded-r-2xl",
              triggerProps?.className
            )}
          >
            <ChevronDown size="15" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-stretch">
          {dropdownContent}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
