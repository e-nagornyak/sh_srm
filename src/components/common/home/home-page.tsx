import { SearchIcon } from "lucide-react"

import { RoutePaths } from "@/config/routes"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "@/components/ui/link"
import { Title } from "@/components/ui/title"
import { HomeBenefitsList } from "@/components/common/home/home-benefits-list"
import { HomeListIntegrations } from "@/components/common/home/home-list-integrations"
import { HomeTable } from "@/components/common/home/home-table"

export function HomePage() {
  return (
    <div className="relative min-h-screen max-w-full text-white">
      <div className="mt-5 flex flex-col-reverse justify-between gap-10 lg:flex-row xl:mt-20">
        <div className="lg:w-1/3">
          <Title weight="bold" size="2xl" className="mb-4 text-4xl lg:text-5xl">
            Best tool to manage e-commerce in one place
          </Title>
          <Title className="mb-6 text-xl">
            For startups, growing, developing and large businesses.
          </Title>
          <Link
            variant="ghost"
            className={buttonVariants({ size: "lg" })}
            href={RoutePaths.auth.login}
          >
            Try it for free
          </Link>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <div className="rounded-lg bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center">
              <Input className="mr-2 grow text-black" placeholder="Search..." />
              <Button variant="outline" size="icon">
                <SearchIcon className="size-4 text-black dark:text-white" />
              </Button>
            </div>
            <HomeTable />
          </div>
        </div>
      </div>
      <HomeListIntegrations />
      <Title weight="semibold" size="xl" className="my-10 text-center">
        One system. So many benefits.
      </Title>
      <HomeBenefitsList />
    </div>
  )
}
