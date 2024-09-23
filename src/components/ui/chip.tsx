import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-block items-center rounded-md px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "px-1.5 py-1 text-[16px]",
        small: "px-1.5 py-0.5 text-[14px]",
        lg: "px-2.5 py-0.5 text-[26px]",
        "2xl": "px-2.5 py-0.5 text-2xl",
      },
      color: {
        gray: "bg-gray-400 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof chipVariants> {}

function Chip({ className, variant, color, size, ...props }: ChipProps) {
  return (
    <span
      className={cn(chipVariants({ variant, color, size }), className)}
      {...props}
    />
  )
}

export { Chip, chipVariants }
