import { type ReactNode } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ButtonWithTooltipProps {
  trigger: ReactNode
  text: ReactNode
}

export function ComponentWithTooltip({
  trigger,
  text,
}: ButtonWithTooltipProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent className="max-w-64">{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
