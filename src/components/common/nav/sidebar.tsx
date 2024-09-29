import { RoutePaths } from "@/config/routes"
import { sidebarConfig } from "@/config/sidebar"
import { cn } from "@/lib/utils"
import { Accordion } from "@/components/ui/accordion"
import { SidebarClosedItem } from "@/components/common/sidebar/sidebar-closed-item"
import { SidebarOpenedItem } from "@/components/common/sidebar/sidebar-opened-item"
import { Logo } from "@/components/shared/logo"

interface SidebarProps {
  open: boolean
  currentRoutePath: string
}

export function Sidebar({ open, currentRoutePath }: SidebarProps) {
  return (
    <div
      className={
        "flex size-full shrink-0 flex-col overflow-hidden text-sidebar-foreground shadow-md duration-500"
      }
    >
      <Logo
        href={RoutePaths.private.dashboard}
        size={open ? "xl" : "sm"}
        className={cn("mb-4 pb-2", { "text-center": !open })}
      />
      {open ? (
        <Accordion
          className="flex w-full flex-col gap-2"
          type="single"
          collapsible
        >
          {sidebarConfig?.main.map((item) => (
            <SidebarOpenedItem
              currentPath={currentRoutePath}
              key={item?.title}
              item={item}
            />
          ))}
        </Accordion>
      ) : (
        <div className="flex flex-col gap-2">
          {sidebarConfig?.main.map((item) => (
            <SidebarClosedItem
              currentPath={currentRoutePath}
              key={item?.title}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  )
}
