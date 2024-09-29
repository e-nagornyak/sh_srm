import { type User } from "next-auth"

import { RoutePaths } from "@/config/routes"
import { NavigationMenuItem } from "@/components/ui/navigation-menu"
import { Title } from "@/components/ui/title"
import { AuthButton } from "@/components/common/nav/auth-button"
import { NavList } from "@/components/common/nav/nav-list"
import { LanguageToggle } from "@/components/shared/language-toggle"
import { Logo } from "@/components/shared/logo"
import { ModeSmallToggle } from "@/components/shared/mode-small-toggle"

interface DefaultPublicNavProps {
  user?: User
}

export function DefaultPublicNav({ user }: DefaultPublicNavProps) {
  return (
    <nav className="flex size-full items-center justify-between gap-3">
      <NavList user={user} />

      <div className="flex items-center justify-between gap-3">
        <div className="hidden md:block">
          <LanguageToggle />
        </div>
        <AuthButton />
        <div className="hidden md:block">
          <ModeSmallToggle />
        </div>
      </div>
    </nav>
  )
}
