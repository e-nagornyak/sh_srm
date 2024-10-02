import { useState, type ReactNode } from "react"
import { type Side } from "@floating-ui/utils"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ButtonWithTooltipProps {
  trigger: ReactNode
  text: ReactNode
  side?: Side
}

export function ComponentWithTooltip({
  trigger,
  text,
  side,
}: ButtonWithTooltipProps) {
  return (
    <TooltipProvider disableHoverableContent delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent side={side} className="max-w-64">
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
