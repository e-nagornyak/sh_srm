import { Box, Clock, Home, Network, Play, Settings } from "lucide-react"

import { Link } from "@/components/ui/link"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"

interface CardData {
  title: string
  description: string
  icon: React.ReactNode
}

const list: CardData[] = [
  {
    title: "Integrations you need",
    description:
      "Choose from the rich integration offer and use those fitting your business. One system and subscription gives you access to popular marketplace platforms.",
    icon: <Box className="size-10 text-highlight" />,
  },
  {
    title: "Management from one place",
    description:
      "Forget about logging in separately to different platforms. Manage your multi-channel orders in one system, and use it to issue invoices, print labels and send packages.",
    icon: <Network className="size-10 text-highlight" />,
  },
  {
    title: "Full stock and price control",
    description:
      "Synchronizing your warehouse with various sales channels will help avoid quantity and price discrepancies, automatically closing offers at zero stock.",
    icon: <Home className="size-10 text-highlight" />,
  },
  {
    title: "Time saving",
    description:
      "List and edit your offers in bulk on various sales platforms - create thousands of offers in just a few minutes!",
    icon: <Clock className="size-10 text-highlight" />,
  },
  {
    title: "Workflow automation",
    description:
      "Automatic actions allow the system to send emails, create packages, print labels, or issue invoices, so you can focus on expanding your business.",
    icon: <Settings className="size-10 text-highlight" />,
  },
]

export const HomeBenefitsList = () => {
  return (
    <div className="grid cursor-pointer grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-2 xl:grid-cols-3">
      {list.map((card, index) => (
        <div
          key={index}
          className="group h-fit rounded-lg border border-transparent p-6 transition-all duration-500 hover:border-gray-200 hover:shadow-md dark:hover:border-white/50"
        >
          <div className="mb-4 flex items-center space-x-4">
            {card.icon}
            <Title
              size="sm"
              className="font-semibold group-hover:text-highlight"
            >
              {card.title}
            </Title>
          </div>
          <Text className="text-gray-600">{card.description}</Text>
          <Link
            href="#"
            className="mt-4 block text-highlight underline-offset-4 opacity-0 transition-opacity duration-500 hover:underline group-hover:opacity-100"
          >
            See More
          </Link>
        </div>
      ))}
      <div className="relative h-full min-h-[425px] rounded-2xl border-2 border-highlight-400 p-10 pr-16">
        <Title weight="extrabold" size="xl">
          What can SH. <span className="text-highlight">do for you?</span>
        </Title>
        <div className="absolute bottom-10 left-20 flex h-52 w-96 items-center justify-center rounded-lg bg-gray-300 shadow-md">
          <button className="rounded-full bg-highlight p-4">
            <Play size="40" />
          </button>
        </div>
      </div>
    </div>
  )
}
