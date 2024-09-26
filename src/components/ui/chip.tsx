import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-block items-center rounded-md font-semibold text-white",
  {
    variants: {
      size: {
        small: "px-1 py-0.5 text-[12px]",
        // small: "px-1.5 py-0.5 text-[14px]",
        // lg: "px-2.5 py-0.5 text-[26px]",
        // "2xl": "px-2.5 py-0.5 text-2xl",
      },
      color: {
        green: "bg-green-700",
      },
    },
    defaultVariants: {
      size: "small",
      color: "green",
    },
  }
)

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof chipVariants> {}

function Chip({ className, color, size, ...props }: ChipProps) {
  return (
    <span className={cn(chipVariants({ color, size }), className)} {...props} />
  )
}

export { Chip, chipVariants }
