import * as React from "react"
import { useAppStore } from "@/store/app"
import { ChevronDown, PanelRightOpen } from "lucide-react"
import { type Session } from "next-auth"

import { routePaths } from "@/config/routes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/components/ui/link"
import { Text } from "@/components/ui/text"
import { AuthButton } from "@/components/common/nav/AuthButton"
import { LanguageToggle } from "@/components/shared/language-toggle"
import { ModeSmallToggle } from "@/components/shared/mode-small-toggle"
import { SidebarToggle } from "@/components/shared/sidebar-toggle"

interface DefaultPrivateHeaderProps {
  session: Session
}

export function DefaultPrivateHeader({ session }: DefaultPrivateHeaderProps) {
  const user = session?.user

  return (
    <header className="w-full border-b border-border bg-card p-4 px-6 shadow-sm">
      <div className="flex items-center justify-between">
        <nav className="flex size-full items-center justify-between gap-3">
          <SidebarToggle />
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center gap-2">
                <span className="flex size-10 items-center justify-center rounded-full bg-highlight font-semibold uppercase flexible-text-5">
                  {user?.username?.[0] || ""}
                </span>
                <Text>{user?.username}</Text>
                <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex min-w-56 flex-col items-start justify-between">
                <DropdownMenuItem>
                  <Link href={routePaths.private.user.list}>
                    List of employees
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="h-px w-full bg-gray-200 dark:bg-white" />
                <DropdownMenuItem>
                  <LanguageToggle />
                </DropdownMenuItem>
                <DropdownMenuSeparator className="h-px w-full bg-gray-200 dark:bg-white" />
                <DropdownMenuItem className="mx-auto">
                  <AuthButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeSmallToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
