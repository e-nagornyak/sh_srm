import React from "react"

import type { SidebarMainItem } from "@/config/sidebar"
import { cn } from "@/lib/utils"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Text } from "@/components/ui/text"

interface SidebarItemProps {
  item: SidebarMainItem
  currentPath: string
}

export const SidebarOpenedItem = ({ item, currentPath }: SidebarItemProps) => {
  return "items" in item ? (
    <AccordionItem value={item?.title}>
      <AccordionTrigger
        className={cn(
          buttonVariants({
            variant:
              "activePath" in item && currentPath.includes(item?.activePath)
                ? "accent"
                : "ghost",
          }),
          "justify-start gap-2"
        )}
      >
        <div className={"flex items-center gap-2"}>
          {item?.icon}
          <Text size="lg" className={"truncate"}>
            {item?.title}
          </Text>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-2 pl-6 pt-2">
        {item?.items?.map(
          (subitem) =>
            subitem?.href && (
              <Link
                key={subitem?.title}
                className="justify-start gap-2"
                variant="ghost"
                buttonStyles={{
                  variant: currentPath?.includes(subitem?.href)
                    ? "accent"
                    : "ghost",
                }}
                href={subitem?.href}
              >
                <Text size="lg" className="truncate">
                  {subitem?.title}
                </Text>
              </Link>
            )
        )}
      </AccordionContent>
    </AccordionItem>
  ) : (
    <Link
      className="justify-start gap-2 [&_svg]:shrink-0"
      variant="ghost"
      buttonStyles={{
        variant: currentPath?.includes(item?.href) ? "accent" : "ghost",
      }}
      href={item?.href}
    >
      {item?.icon}
      <Text size="lg" className={"truncate"}>
        {item?.title}
      </Text>
    </Link>
  )
}
