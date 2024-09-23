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
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"
import { AllegroOrdersGroupsController } from "@/components/controllers/allegro/allegro-orders-groups/allegro-orders-groups-controller"
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
      <div className="w-full space-y-2 overflow-x-auto rounded-lg">
        <Card className="w-full">
          <CardContent>
            <Title className="leading-none" size="lg">
              All orders
            </Title>
          </CardContent>
        </Card>
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
    </AllegroOrdersContext.Provider>
  )
}
