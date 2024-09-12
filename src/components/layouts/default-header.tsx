import { SectionIcon } from "@radix-ui/react-icons"

import { routePaths } from "@/config/routes"
import { siteConfig } from "@/config/site"
import { Link } from "@/components/ui/link"
import { Title } from "@/components/ui/title"
import { AuthButton } from "@/components/common/nav/AuthButton"
import { LanguageToggle } from "@/components/shared/language-toggle"
import { ModeToggle } from "@/components/shared/mode-toggle"

const list = [{ title: "Users", href: routePaths.user.list }]

export function DefaultHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-10 flex items-center md:mr-6 md:space-x-2">
          <SectionIcon className="size-10" aria-hidden="true" />
          <Title size="xl" className="hidden font-bold md:inline-block">
            {siteConfig.name}
          </Title>
        </Link>
        {list?.map(({ title, href }) => (
          <Link key={title} className="hover:underline" href={href}>
            {title}
          </Link>
        ))}
        <nav className="flex flex-1 items-center justify-end gap-3">
          <LanguageToggle />
          <AuthButton />
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
