"use client"

import * as React from "react"
import { useAppStore } from "@/store/app"
import { PanelLeftOpen, PanelRightOpen, SquareMenu } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SidebarToggle() {
  const toggleSidebar = useAppStore((store) => store?.toggleSidebar)
  const openSidebar = useAppStore((store) => store?.openSidebar)

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <button
            onClick={() => toggleSidebar(!openSidebar)}
            className="transition-colors duration-300 hover:text-highlight"
          >
            <SquareMenu className="md:hidden" string="30" />
            {openSidebar ? (
              <PanelRightOpen className="hidden md:block" size="30" />
            ) : (
              <PanelLeftOpen className="hidden md:block" size="30" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-md:hidden">
          {openSidebar ? "Hide menu" : "Show menu"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
