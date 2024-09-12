import React, { type PropsWithChildren } from "react"
import clsx from "clsx"

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

interface TitleProps extends PropsWithChildren {
  size?: TitleSize
  className?: string
}

export const Title = ({ children, size = "sm", className }: TitleProps) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const

  const mapClassNameBySize = {
    xs: "flexible-text-[16px] text-black dark:text-white",
    sm: "flexible-text-[22px] text-black dark:text-white",
    md: "flexible-text-[26px] text-black dark:text-white",
    lg: "flexible-text-[32px] text-black dark:text-white",
    xl: "flexible-text-[40px] text-black dark:text-white",
    "2xl": "flexible-text-[48px] text-black dark:text-white",
  } as const

  return React.createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size], className) },
    children
  )
}
