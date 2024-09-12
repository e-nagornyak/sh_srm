import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NewsTicker } from "@/components/shared/ticker"

export function Landing() {
  return (
    <div className="min-h-screen from-blue-400 to-blue-600 text-white">
      <div className="container mx-auto flex flex-col items-center px-4 py-12 lg:flex-row">
        {/* Left side content */}
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            Best tool to manage e-commerce in one place
          </h1>
          <p className="mb-6 text-xl">
            For startups, growing, developing and large businesses.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">
            Try it for free
          </Button>
          <p className="mt-2 text-sm">No credit card required</p>
        </div>

        {/* Right side mockup */}
        <div className="lg:w-1/2">
          <div className="rotate-3 rounded-lg bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center">
              <Input className="mr-2 grow text-black" placeholder="Search..." />
              <Button variant="outline" size="icon">
                <SearchIcon className="size-4" />
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

      {/* Integration section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="mb-8 text-xl">Choose from over 1000 integrations:</p>
        <NewsTicker
          itemClassName="rounded-md bg-white/20 p-5 ml-6"
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
