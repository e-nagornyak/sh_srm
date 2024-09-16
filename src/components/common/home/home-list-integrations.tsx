import { Title } from "@/components/ui/title"
import { NewsTicker } from "@/components/shared/ticker"

interface HomeListIntegrationsProps {}

export function HomeListIntegrations(props: HomeListIntegrationsProps) {
  return (
    <div className="mt-20 max-w-[90vw] overflow-hidden">
      <Title>
        Choose from over{" "}
        <strong className="text-highlight">1000 integrations:</strong>
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
  )
}
