import React from "react"

import { cn } from "@/lib/utils"

interface NewsTickerProps {
  items: string[]
  itemClassName?: string
}

export function NewsTicker({ items, itemClassName }: NewsTickerProps) {
  const list = (
    <ul className="flex items-center justify-center whitespace-nowrap py-5">
      {items?.map((text, index) => (
        <li key={index} className={cn("ml-4", itemClassName)}>
          {text}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap">{list}</div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        {list}
      </div>
    </div>
  )
}
