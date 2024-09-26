import React, { type PropsWithChildren } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type TextSize = "p" | "span"

export const textVariants = cva("", {
  variants: {
    size: {
      xxs: "leading-[14px] flexible-text-[11px]", // font-size: 10px, line-height: 13px
      xs: "leading-[16px] flexible-text-[12px]", // font-size: 12px, line-height: 16px
      sm: "leading-[20px] flexible-text-[14px]", // font-size: 14px, line-height: 20px
      base: "leading-[24px] flexible-text-[16px]", // font-size: 16px, line-height: 24px
      lg: "leading-[28px] flexible-text-[18px]", // font-size: 18px, line-height: 28px
      xl: "leading-[28px] flexible-text-[20px]", // font-size: 20px, line-height: 28px
      "2xl": "leading-[32px] flexible-text-[24px]", // font-size: 24px, line-height: 32px
      "3xl": "leading-[36px] flexible-text-[30px]", // font-size: 30px, line-height: 36px
      "4xl": "leading-[40px] flexible-text-[36px]", // font-size: 36px, line-height: 40px
      "5xl": "leading-none flexible-text-[48px]", // font-size: 48px, line-height: 1
      "6xl": "leading-none flexible-text-[60px]", // font-size: 60px, line-height: 1
      "7xl": "leading-none flexible-text-[72px]", // font-size: 72px, line-height: 1
      "8xl": "leading-none flexible-text-[96px]", // font-size: 96px, line-height: 1
      "9xl": "leading-none flexible-text-[128px]", // font-size: 128px, line-height: 1
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
    color: {
      default: "text-black dark:text-white",
      reverse: "text-white dark:text-black",
      highlight: "text-highlight",
    },
  },
  defaultVariants: {
    color: "default",
    size: "sm",
    weight: "normal",
  },
})

interface TextProps
  extends PropsWithChildren,
    VariantProps<typeof textVariants> {
  element?: TextSize
  className?: string
}

export const Text = ({
  children,
  weight,
  size,
  color,
  element = "p",
  className,
}: TextProps) => {
  const mapTagBySize: { [key in TextSize]: string } = {
    p: "p",
    span: "span",
  } as const

  return React.createElement(
    mapTagBySize[element],
    { className: cn(textVariants({ weight, size, color }), className) },
    children
  )
}
