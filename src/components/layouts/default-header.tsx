import { AuthButton } from "@/components/common/nav/AuthButton"
import { NavList } from "@/components/common/nav/NavList"
import { LanguageToggle } from "@/components/shared/language-toggle"
import { Logo } from "@/components/shared/Logo"
import { ModeToggle } from "@/components/shared/mode-toggle"

export function DefaultHeader() {
  return (
    <header className="sticky top-0 z-50 w-full rounded-b-md border-b border-border bg-background/95 px-12 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-white">
      <div className="flex items-center justify-between">
        <Logo className="pr-14" />
        <nav className="flex size-full items-center justify-between gap-3">
          <NavList />
          <div className="flex items-center justify-between gap-3">
            <LanguageToggle />
            <AuthButton />
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
