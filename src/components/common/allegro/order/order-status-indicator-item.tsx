"use client"

import { useState } from "react"
import { type OrderStatusIndicator } from "@/constants/order/order-status-indicators"
import { Loader } from "lucide-react"

import { cn } from "@/lib/utils"
import { Text } from "@/components/ui/text"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface OrderStatusIndicatorItemProps {
  indicator: OrderStatusIndicator
}

export function OrderStatusIndicatorItem({
  indicator,
}: OrderStatusIndicatorItemProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (indicator?.onClick) {
      const result = indicator.onClick()
      if (result instanceof Promise) {
        setLoading(true)
        await result
        setLoading(false)
      }
    }
  }

  const Comp = (
    props: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => (
    <button
      disabled={loading || indicator?.disabled}
      className={cn(
        indicator?.colorClassName,
        "flex size-6 shrink-0 items-center justify-center rounded-sm border border-border text-[16px] font-bold leading-none text-white shadow-sm duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:stroke-[3px]"
      )}
      {...props}
    >
      {loading ? <Loader className="animate-spin" /> : indicator?.icon()}
    </button>
  )

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger onClick={handleClick} asChild>
          <Comp />
        </TooltipTrigger>
        <TooltipContent className="w-fit max-w-56 text-center">
          <Text color="reverse" size={"xxs"}>
            {indicator?.description}
          </Text>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
