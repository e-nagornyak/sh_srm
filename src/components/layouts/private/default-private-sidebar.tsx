import React from "react"

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
  return (
    <div
      className={
        "flex min-w-72 flex-col border-r border-border p-6 pt-0 shadow-md dark:border-white"
      }
    >
      <Logo
        href={routePaths.private.dashboard}
        size="xl"
        className="mb-4 border-b pb-2 dark:border-white"
      />
      <Accordion
        className="flex w-full flex-col gap-2"
        type="single"
        collapsible
      >
        {sidebarConfig?.main.map((item) => (
          <SidebarItem key={item?.title} item={item} />
        ))}
      </Accordion>
    </div>
  )
}

interface SidebarItemProps {
  item: SidebarMainItem
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  const linkStyles =
    "flex items-center gap-2 rounded-xl hover:no-underline px-4 py-2 hover:bg-gray-100 transition-colors duration-500 dark:hover:bg-white/30"

  return "items" in item ? (
    <AccordionItem value={item?.title}>
      <AccordionTrigger className={linkStyles}>
        <div className={"flex items-center gap-2"}>
          {item?.icon}
          <Text>{item?.title}</Text>
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
      <Text>{item?.title}</Text>
    </Link>
  )
}
