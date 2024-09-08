import Link from "next/link"
import { SectionIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { AuthButton } from "@/components/common/nav/AuthButton"
import { LanguageToggle } from "@/components/shared/language-toggle"
import { ModeToggle } from "@/components/shared/mode-toggle"

export function DefaultHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-2 flex items-center md:mr-6 md:space-x-2">
          <SectionIcon className="size-6" aria-hidden="true" />
          <span className="hidden font-bold md:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="flex flex-1 items-center gap-2 md:justify-end">
          <LanguageToggle />
          <AuthButton />
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
