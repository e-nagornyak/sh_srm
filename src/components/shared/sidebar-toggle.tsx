"use client"

import * as React from "react"
import { useAppStore } from "@/store/app"
import { PanelLeftOpen, PanelRightOpen } from "lucide-react"

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
            {openSidebar ? (
              <PanelRightOpen size="30" />
            ) : (
              <PanelLeftOpen size="30" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          {openSidebar ? "Hide menu" : "Show menu"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
