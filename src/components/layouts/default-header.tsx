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
    <header className="sticky top-0 z-50 w-full rounded-b-md border-b border-border/40 px-12 shadow-md backdrop-blur supports-[backdrop-filter]:bg-blue-300 dark:border-white dark:supports-[backdrop-filter]:bg-black">
      <div className="flex items-center justify-between">
        <Link className="pr-14" href={routePaths.home}>
          <Title size="xl" className="font-bold">
            {siteConfig.name}
          </Title>
        </Link>

        <nav className="flex size-full items-center justify-between gap-3">
          {list?.map(({ title, href }) => (
            <Link key={title} className="hover:underline" href={href}>
              {title}
            </Link>
          ))}
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
