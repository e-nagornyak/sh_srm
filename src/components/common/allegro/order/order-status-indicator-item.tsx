import { type OrderStatusIndicator } from "@/constants/order/order-status-indicators"

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
  onClick?: () => void
}

export function OrderStatusIndicatorItem({
  indicator,
  onClick,
}: OrderStatusIndicatorItemProps) {
  const Comp = (
    props: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => (
    <button
      className={cn(
        indicator?.colorClassName,
        "flex size-6 shrink-0 items-center justify-center rounded-sm border border-border text-[16px] font-bold leading-none text-white shadow-sm duration-300 hover:-translate-y-1 [&_svg]:size-4 [&_svg]:stroke-[3px]"
      )}
      {...props}
    >
      {indicator?.icon()}
    </button>
  )

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger onClick={onClick} asChild>
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
