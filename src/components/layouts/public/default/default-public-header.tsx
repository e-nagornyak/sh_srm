import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/next-auth"
import { AuthButton } from "@/components/common/nav/auth-button"
import { NavList } from "@/components/common/nav/nav=list"
import { LanguageToggle } from "@/components/shared/language-toggle"
import { Logo } from "@/components/shared/logo"
import { ModeSmallToggle } from "@/components/shared/mode-small-toggle"

export async function DefaultPublicHeader() {
  const session = await getServerSession(authOptions)
  const user = session?.user

  return (
    <header className="sticky top-0 z-50 w-full rounded-b-md border-b border-border bg-background/95 px-2 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-white md:px-12">
      <div className="flex items-center justify-between">
        <Logo className="pr-14" />
        <nav className="flex size-full items-center justify-between gap-3">
          <NavList user={user} />
          <div className="flex items-center justify-between gap-3">
            <LanguageToggle />
            <AuthButton />
            <ModeSmallToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
