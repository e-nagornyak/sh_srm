"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { useAppStore } from "@/store/app"

import { RoutePaths } from "@/config/routes"
import { sidebarConfig } from "@/config/sidebar"
import { cn } from "@/lib/utils"
import { Accordion } from "@/components/ui/accordion"
import { SidebarClosedItem } from "@/components/common/sidebar/sidebar-closed-item"
import { SidebarOpenedItem } from "@/components/common/sidebar/sidebar-opened-item"
import { Logo } from "@/components/shared/logo"

export function DefaultPrivateSidebar() {
  const path = usePathname()
  const openSidebar = useAppStore((store) => store?.openSidebar)

  return (
    <div
      className={cn(
        "sticky top-0 z-50 flex h-screen shrink-0 flex-col overflow-hidden border-r border-black border-border bg-sidebar p-2 text-sidebar-foreground shadow-md duration-500",
        openSidebar ? "w-52 pt-0" : "w-14"
      )}
    >
      <Logo
        href={RoutePaths.private.dashboard}
        size={openSidebar ? "xl" : "sm"}
        className={cn("mb-4 pb-2", { "text-center": !openSidebar })}
      />
      {openSidebar ? (
        <Accordion
          className="flex w-full flex-col gap-2"
          type="single"
          collapsible
        >
          {sidebarConfig?.main.map((item) => (
            <SidebarOpenedItem
              currentPath={path}
              key={item?.title}
              item={item}
            />
          ))}
        </Accordion>
      ) : (
        <div className="flex flex-col gap-2">
          {sidebarConfig?.main.map((item) => (
            <SidebarClosedItem
              currentPath={path}
              key={item?.title}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  )
}
