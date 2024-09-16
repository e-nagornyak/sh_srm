import React, { type PropsWithChildren } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const titleVariants = cva("text-black dark:text-white", {
  variants: {
    size: {
      xs: "flexible-text-[16px]",
      sm: "flexible-text-[22px]",
      md: "flexible-text-[26px]",
      lg: "flexible-text-[32px]",
      xl: "flexible-text-[40px]",
      "2xl": "flexible-text-[48px]",
    },
    weight: {
      thin: "font-thin", // font-weight: 100
      extralight: "font-extralight", // font-weight: 200
      light: "font-light", // font-weight: 300
      normal: "font-normal", // font-weight: 400
      medium: "font-medium", // font-weight: 500
      semibold: "font-semibold", // font-weight: 600
      bold: "font-bold", // font-weight: 700
      extrabold: "font-extrabold", // font-weight: 800
      black: "font-black", // font-weight: 900
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "normal",
  },
})

interface TitleProps
  extends PropsWithChildren,
    VariantProps<typeof titleVariants> {
  className?: string
}

export const Title = ({
  children,
  size = "sm",
  weight,
  className,
}: TitleProps) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const

  return React.createElement(
    mapTagBySize[size || "sm"],
    { className: cn(titleVariants({ size, weight }), className) },
    children
  )
}
