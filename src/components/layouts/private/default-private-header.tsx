import * as React from "react"
import { ChevronDown, PanelRightOpen } from "lucide-react"
import { type Session } from "next-auth"

import { routePaths } from "@/config/routes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/components/ui/link"
import { Text } from "@/components/ui/text"
import { AuthButton } from "@/components/common/nav/AuthButton"
import { LanguageToggle } from "@/components/shared/language-toggle"
import { ModeToggle } from "@/components/shared/mode-toggle"

interface DefaultPrivateHeaderProps {
  session: Session
}

export function DefaultPrivateHeader({ session }: DefaultPrivateHeaderProps) {
  const user = session?.user

  return (
    <header className="w-full border-b border-border bg-background/95 p-4 px-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-white">
      <div className="flex items-center justify-between">
        <nav className="flex size-full items-center justify-between gap-3">
          <button className="transition-colors duration-300 hover:text-highlight">
            <PanelRightOpen size="30" />
          </button>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center gap-2">
                <span className="flex size-10 items-center justify-center rounded-full bg-highlight font-semibold uppercase flexible-text-5">
                  {user?.username?.[0] || ""}
                </span>
                <Text>{user?.username}</Text>
                <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col items-center justify-between gap-3">
                <DropdownMenuItem>
                  <Link href={routePaths.private.user.list}>
                    List of employees
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="mt-4">
                  <AuthButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
