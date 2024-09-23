import React from "react"
import { PanelLeftOpen, PanelRightOpen } from "lucide-react"

import type { SidebarMainItem } from "@/config/sidebar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Link } from "@/components/ui/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarItemProps {
  item: SidebarMainItem
  currentPath: string
}

export const SidebarClosedItem = ({ item, currentPath }: SidebarItemProps) => {
  return "items" in item ? (
    <HoverCard closeDelay={50} openDelay={50}>
      <HoverCardTrigger asChild>
        <Button
          className="[&_svg]:shrink-0"
          variant={
            "activePath" in item && currentPath.includes(item?.activePath)
              ? "accent"
              : "ghost"
          }
        >
          {item?.icon}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit" sideOffset={17} side="right">
        {item?.items?.map(
          (subitem) =>
            subitem?.href && (
              <Link
                key={subitem?.title}
                variant="ghost"
                buttonStyles={{
                  variant: currentPath?.includes(subitem?.href)
                    ? "accent"
                    : "ghost",
                }}
                href={subitem?.href}
              >
                {subitem?.title}
              </Link>
            )
        )}
      </HoverCardContent>
    </HoverCard>
  ) : (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Link
            variant="ghost"
            className="[&_svg]:shrink-0"
            buttonStyles={{
              variant: currentPath?.includes(item?.href) ? "accent" : "ghost",
            }}
            href={item?.href}
          >
            {item?.icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{item?.title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
