"use client"

import React, { useRef } from "react"
import { useAppStore } from "@/store/app"

import { routePaths } from "@/config/routes"
import { sidebarConfig, type SidebarMainItem } from "@/config/sidebar"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "@/components/ui/link"
import { Text } from "@/components/ui/text"
import { Logo } from "@/components/shared/Logo"

export function DefaultPrivateSidebar() {
  const openSidebar = useAppStore((store) => store?.openSidebar)

  return (
    <div
      className={cn(
        "group/sidebar flex flex-col overflow-hidden border-r border-border shadow-md duration-500 dark:border-white",
        openSidebar ? "w-72 p-6 pt-0" : "w-16 p-2"
      )}
    >
      <Logo
        href={routePaths.private.dashboard}
        size={openSidebar ? "xl" : "md"}
        className={"mb-4 pb-2"}
      />
      <Accordion
        className="flex w-full flex-col gap-2"
        type="single"
        collapsible
      >
        {sidebarConfig?.main.map((item) => (
          <SidebarItem
            key={item?.title}
            openSidebar={openSidebar}
            item={item}
          />
        ))}
      </Accordion>
    </div>
  )
}

interface SidebarItemProps {
  item: SidebarMainItem
  openSidebar: boolean
}

const SidebarItem = ({ item, openSidebar }: SidebarItemProps) => {
  const linkStyles = cn(
    "flex items-center gap-2 rounded-xl transition-colors duration-500 hover:bg-gray-100 hover:no-underline dark:hover:bg-white/30",
    openSidebar ? " px-4 py-2" : "justify-center"
  )

  if (!openSidebar) {
    return (
      <Link className={linkStyles} href={item?.href || ("" as string)}>
        {item?.icon}
      </Link>
    )
  }

  return "items" in item ? (
    <AccordionItem value={item?.title}>
      <AccordionTrigger className={linkStyles}>
        <div className={"flex items-center gap-2"}>
          {item?.icon}
          <Text className={"truncate"}>{item?.title}</Text>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-2 pl-6 pt-2">
        {item?.items?.map((subItem) => (
          <Link
            key={subItem?.title}
            className={cn(linkStyles, "w-fit")}
            href={subItem?.href as string}
          >
            <Text>{subItem?.title}</Text>
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  ) : (
    <Link className={linkStyles} href={item?.href}>
      {item?.icon}
      <Text className={"truncate"}>{item?.title}</Text>
    </Link>
  )
}
