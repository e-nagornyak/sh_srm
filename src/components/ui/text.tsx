import React, { type PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

type TitleSize = "p" | "span"

interface TextProps extends PropsWithChildren {
  element?: TitleSize
  className?: string
}

export const Text = ({ children, element = "p", className }: TextProps) => {
  const mapTagBySize: { [key in TitleSize]: string } = {
    p: "p",
    span: "span",
  } as const

  return React.createElement(
    mapTagBySize[element],
    { className: cn("text-black dark:text-white", className) },
    children
  )
}
