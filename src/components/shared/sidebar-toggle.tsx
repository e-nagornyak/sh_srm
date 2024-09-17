"use client"

import * as React from "react"
import { useAppStore } from "@/store/app"
import { PanelRightOpen } from "lucide-react"

export function SidebarToggle() {
  const toggleSidebar = useAppStore((store) => store?.toggleSidebar)
  const openSidebar = useAppStore((store) => store?.openSidebar)

  return (
    <button
      onClick={() => toggleSidebar(!openSidebar)}
      className="transition-colors duration-300 hover:text-highlight"
    >
      <PanelRightOpen size="30" />
    </button>
  )
}
