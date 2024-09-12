import React from "react"

import { cn } from "@/lib/utils"

interface NewsTickerProps {
  items: string[]
  itemClassName?: string
}

export function NewsTicker({ items, itemClassName }: NewsTickerProps) {
  const list = (
    <ul className="animate-infinite-scroll flex items-center justify-center whitespace-nowrap py-5">
      {items?.map((text, index) => (
        <li key={index} className={cn("ml-2.5", itemClassName)}>
          {text}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap py-12">{list}</div>
      <div className="animate-marquee2 absolute top-0 whitespace-nowrap py-12">
        {list}
      </div>
    </div>
  )
}
