import { SearchIcon } from "lucide-react"

import { routePaths } from "@/config/routes"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "@/components/ui/link"
import { Title } from "@/components/ui/title"
import { NewsTicker } from "@/components/shared/ticker"

export function HomePage() {
  return (
    <div className="relative min-h-screen max-w-full text-white">
      <div className="mt-5 flex flex-col-reverse justify-between gap-10 lg:flex-row xl:mt-20">
        <div className="lg:w-1/3">
          <Title size="2xl" className="mb-4 text-4xl font-bold lg:text-5xl">
            Best tool to manage e-commerce in one place
          </Title>
          <Title className="mb-6 text-xl">
            For startups, growing, developing and large businesses.
          </Title>
          <Link
            className={buttonVariants({ size: "lg" })}
            href={routePaths.auth.login}
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
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600">
                  <th>ORDER</th>
                  <th>BUYER</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2">{75925883 - i}</td>
                    <td>
                      <div className="flex items-center">
                        <div className="mr-2 size-8 rounded-full bg-gray-200"></div>
                        <div className="h-3 w-4 bg-red-500"></div>
                      </div>
                    </td>
                    <td>
                      <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-800">
                        New
                      </span>
                    </td>
                    <td>23.05.2023</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Title>
          Choose from over{" "}
          <strong className="text-primary">1000 integrations:</strong>
        </Title>
        <NewsTicker
          itemClassName="rounded-md bg-primary/50 dark:bg-white/20 p-5 ml-6 uppercase"
          items={[
            "EVRi",
            "amazon",
            "WOO COMMERCE",
            "Royal Mail",
            "magento",
            "UPS",
            "ebay",
          ]}
        />
      </div>
    </div>
  )
}
