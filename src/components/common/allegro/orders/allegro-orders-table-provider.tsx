"use client"

import * as React from "react"
import {
  CirclePlus,
  List,
  Plus,
  RefreshCcw,
  Trash,
  WalletCards,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"
import { type DataTableConfig } from "@/components/controllers/allegro/allegro-orders-table/helpers/allegro-orders-table-config"

type FeatureFlagValue = DataTableConfig["featureFlags"][number]["value"]

interface TasksTableContextProps {
  featureFlags: FeatureFlagValue[]
  setFeatureFlags: React.Dispatch<React.SetStateAction<FeatureFlagValue[]>>
}

const AllegroOrdersContext = React.createContext<TasksTableContextProps>({
  featureFlags: [],
  setFeatureFlags: () => {},
})

export function useAllegroOrdersTable() {
  const context = React.useContext(AllegroOrdersContext)
  if (!context) {
    throw new Error("useTasksTable must be used within a TasksTableProvider")
  }
  return context
}

interface TableProviderProps extends React.PropsWithChildren {}

export function AllegroOrdersTableProvider({ children }: TableProviderProps) {
  const [featureFlags, setFeatureFlags] = React.useState<FeatureFlagValue[]>([])

  return (
    <AllegroOrdersContext.Provider
      value={{
        featureFlags,
        setFeatureFlags,
      }}
    >
      <div className="flex gap-3">
        <div className="h-fit rounded-lg bg-white/10 p-2">
          <div className="min-h-52 w-full">
            <Button size="sm" className="mb-3 w-full gap-4 rounded-2xl">
              <CirclePlus />
              Add order
            </Button>
            <Button className="w-full justify-start gap-2" variant="ghost">
              <WalletCards size="15" />
              All
            </Button>
            <Accordion type="multiple" className="">
              <AccordionItem value={`section-1`}>
                <AccordionTrigger
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "justify-start",
                  })}
                >
                  IN PROGRESS (67)
                </AccordionTrigger>
                <AccordionContent className="space-y-2 px-4">
                  <button className="flex items-center gap-2">
                    <span className="h-4 w-5 bg-blue-600 text-xs">64</span>
                    <Text size="xs">New orders</Text>
                  </button>
                  <button className="flex items-center gap-2">
                    <span className="h-4 w-5 bg-yellow-600 p-0.5 text-xs">
                      3
                    </span>
                    <Text size="xs">Personal receipt</Text>
                  </button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={`section-2`}>
                <AccordionTrigger
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "justify-start",
                  })}
                >
                  PROCESSED (9999+)
                </AccordionTrigger>
                <AccordionContent className="space-y-2 px-4">
                  <button className="flex items-center gap-2">
                    <span className="h-4 w-5 bg-blue-600 text-xs">47</span>
                    <Text size="xs">To be sent</Text>
                  </button>
                  <button className="flex items-center gap-2">
                    <span className="h-4 min-w-5 bg-green-600 p-0.5 text-xs">
                      832
                    </span>
                    <Text size="xs">Sent</Text>
                  </button>
                  <button className="flex items-center gap-2">
                    <span className="h-4 min-w-5 bg-gray-600 p-0.5 text-xs">
                      26784
                    </span>
                    <Text size="xs">Realized</Text>
                  </button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={`section-3`}>
                <AccordionTrigger
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "justify-start",
                  })}
                >
                  RETURN (2661)
                </AccordionTrigger>
                <AccordionContent className="space-y-2 px-4">
                  <button className="flex items-center gap-2">
                    <span className="h-4 min-w-5 bg-red-600 p-0.5 text-xs">
                      676
                    </span>
                    <Text size="xs">Cancelled</Text>
                  </button>
                  <button className="flex items-center gap-2">
                    <span className="h-4 min-w-5 bg-purple-600 p-0.5 text-xs">
                      18
                    </span>
                    <Text size="xs">Returned</Text>
                  </button>
                  <button className="flex items-center gap-2">
                    <span className="h-4 min-w-5 bg-emerald-600 p-0.5 text-xs">
                      26784
                    </span>
                    <Text size="xs">Funds returned</Text>
                  </button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Separator />
            <Button className="w-full justify-start gap-2" variant="ghost">
              <List size="15" />
              Archive
            </Button>
            <Button className="w-full justify-start gap-2" variant="ghost">
              <Trash size="15" />
              Bin
            </Button>
            <Separator />
            <Button className="w-full justify-between" variant="ghost">
              <div className="flex items-center gap-2">
                <Plus size="15" />
                Add status
              </div>
              <RefreshCcw size="15" />
            </Button>
          </div>
        </div>
        <div className="w-full overflow-x-auto rounded-lg">
          <Title className="bg-white/20 p-2 leading-none" size="lg">
            List of all orders
          </Title>
          {/*<ToggleGroup*/}
          {/*  type="multiple"*/}
          {/*  variant="outline"*/}
          {/*  size="sm"*/}
          {/*  value={featureFlags}*/}
          {/*  onValueChange={(value: FeatureFlagValue[]) => setFeatureFlags(value)}*/}
          {/*  className="w-fit"*/}
          {/*>*/}
          {/*  {dataTableConfig.featureFlags.map((flag) => (*/}
          {/*    <Tooltip key={flag.value} delayDuration={250}>*/}
          {/*      <ToggleGroupItem*/}
          {/*        value={flag.value}*/}
          {/*        className="whitespace-nowrap px-3 text-xs"*/}
          {/*        asChild*/}
          {/*      >*/}
          {/*        <TooltipTrigger>*/}
          {/*          <flag.icon*/}
          {/*            className="mr-2 size-3.5 shrink-0"*/}
          {/*            aria-hidden="true"*/}
          {/*          />*/}
          {/*          {flag.label}*/}
          {/*        </TooltipTrigger>*/}
          {/*      </ToggleGroupItem>*/}
          {/*      <TooltipContent*/}
          {/*        align="start"*/}
          {/*        side="bottom"*/}
          {/*        sideOffset={6}*/}
          {/*        className="flex max-w-60 flex-col space-y-1.5 border bg-background py-2 font-semibold text-foreground"*/}
          {/*      >*/}
          {/*        <div>{flag.tooltipTitle}</div>*/}
          {/*        <div className="text-xs text-muted-foreground">*/}
          {/*          {flag.tooltipDescription}*/}
          {/*        </div>*/}
          {/*      </TooltipContent>*/}
          {/*    </Tooltip>*/}
          {/*  ))}*/}
          {/*</ToggleGroup>*/}
          {children}
        </div>
      </div>
    </AllegroOrdersContext.Provider>
  )
}
