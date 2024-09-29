"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { useAppStore } from "@/store/app"

import { cn } from "@/lib/utils"
import { useBreakpoint } from "@/hooks/breakpoint"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Sidebar } from "@/components/common/nav/sidebar"

export function DefaultPrivateSidebar() {
  const path = usePathname()
  const openSidebar = useAppStore((store) => store?.openSidebar)
  const toggleSidebar = useAppStore((store) => store?.toggleSidebar)

  const md = useBreakpoint("md")

  return md ? (
    <div
      className={cn(
        "sticky top-0 z-50 h-screen shrink-0 overflow-hidden border-r border-border bg-sidebar p-2 duration-500",
        openSidebar ? "w-52 pt-0" : "w-14"
      )}
    >
      <Sidebar open={openSidebar} currentRoutePath={path} />
    </div>
  ) : (
    <Sheet open={openSidebar} onOpenChange={toggleSidebar}>
      <SheetContent side="left">
        <Sidebar open={openSidebar} currentRoutePath={path} />
      </SheetContent>
    </Sheet>
  )
}
