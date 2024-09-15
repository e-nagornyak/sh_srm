"use client"

import * as React from "react"
import NextLink from "next/link"
import type { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface LinkProps {
  buttonStyles?: Partial<VariantProps<typeof buttonVariants>>
}

const Link = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  React.ComponentPropsWithoutRef<typeof NextLink> & LinkProps
>(({ buttonStyles, className, ...rest }, ref) => (
  <NextLink
    ref={ref}
    className={cn(
      "cursor-pointer",
      buttonStyles && buttonVariants(buttonStyles),
      className
    )}
    {...rest}
  />
))
Link.displayName = NextLink.displayName

export { Link }
