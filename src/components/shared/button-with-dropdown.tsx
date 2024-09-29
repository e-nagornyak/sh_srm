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
  wrapperClassName?: string
  //
  buttonContent: ReactNode
  dropdownContent: ReactNode
  //
  buttonProps?: ButtonProps
  triggerProps?: ButtonProps
}

export function ButtonWithDropdown({
  wrapperClassName,
  buttonProps,
  triggerProps,
  dropdownContent,
  buttonContent,
}: ButtonWithDropdownProps) {
  return (
    <div className={cn("flex items-center", wrapperClassName)}>
      <Button
        size="sm"
        {...buttonProps}
        className={cn(
          "gap-2 rounded-r-none border-r border-border",
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
            className={cn("rounded-none rounded-r-md", triggerProps?.className)}
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
