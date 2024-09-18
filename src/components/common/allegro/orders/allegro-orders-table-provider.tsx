"use client"

import * as React from "react"
import { CirclePlus } from "lucide-react"

import { Button } from "@/components/ui/button"
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
      <div className="flex gap-6">
        <div className="min-w-44">
          <Button className="mb-3 w-full gap-4 rounded-2xl">
            <CirclePlus />
            Add order
          </Button>
          <div className="min-h-52 w-full border border-red-500"></div>
        </div>
        <div className="w-full overflow-x-auto">
          <Title className="leading-none" size="lg">
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
