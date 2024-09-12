"use client"

import * as React from "react"
import NextLink from "next/link"

const Link = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  React.ComponentPropsWithoutRef<typeof NextLink>
>((props, ref) => <NextLink ref={ref} {...props} />)
Link.displayName = NextLink.displayName

export { Link }
