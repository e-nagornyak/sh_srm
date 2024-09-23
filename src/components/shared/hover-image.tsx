import * as React from "react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Img } from "@/components/ui/img"
import { Text } from "@/components/ui/text"

interface HoverImageProps {
  src: string
  quantity?: number
}

export function HoverImage({ src, quantity }: HoverImageProps) {
  return (
    <HoverCard closeDelay={100} openDelay={100}>
      <HoverCardTrigger className="relative block h-12 w-16 bg-gray-200">
        <Img fill className="object-contain" src={src} alt="" />
        {quantity && (
          <Text
            size="sm"
            className="absolute bottom-0 right-0 flex items-center justify-center bg-gray-500 px-1.5"
          >
            {quantity}
          </Text>
        )}
      </HoverCardTrigger>
      <HoverCardContent
        className="relative aspect-square w-44"
        avoidCollisions
        side="top"
      >
        <Img
          fill
          className="z-10 object-contain"
          src={src}
          alt=""
          loading="lazy"
        />
      </HoverCardContent>
    </HoverCard>
  )
}
