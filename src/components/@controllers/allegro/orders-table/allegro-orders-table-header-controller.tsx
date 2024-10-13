"use client"

import React, { useCallback, useMemo, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Filter } from "lucide-react"

import {
  AllegroOrdersSearchParamsSchema,
  type AllegroOrdersSchema,
} from "@/lib/api/allegro/orders/allegro-orders-search-params"
import { useDebounce } from "@/hooks/use-debounce"
import useEffectAfterMount from "@/hooks/use-effect-after-mount"
import { useLazyRouter } from "@/hooks/use-lazy-router"
import { useQueryString } from "@/hooks/use-query-string"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Title } from "@/components/ui/title"
import { AllegroOrdersTableHeaderFilterForm } from "@/components/@controllers/allegro/orders-table/allegro-orders-table-header-filter-form"

interface AllegroOrdersTableHeaderControllerProps {}

export function AllegroOrdersTableHeaderController(
  props: AllegroOrdersTableHeaderControllerProps
) {
  const { isPending, lazyPush } = useLazyRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = useMemo(
    () =>
      AllegroOrdersSearchParamsSchema.parse(Object.fromEntries(searchParams)),
    [searchParams]
  )

  const { createQueryString } = useQueryString(searchParams)

  const [filters, setFilters] = useState<AllegroOrdersSchema>(search)

  const handleFilter = useCallback(
    (filter: AllegroOrdersSchema) => {
      const queryString = createQueryString(filter)
      setFilters(filter)
      const url = `${pathname}?${queryString}`
      lazyPush(url)
    },
    [createQueryString, lazyPush, pathname]
  )

  return (
    <Card className="w-full">
      <CardContent className="flex items-center justify-between">
        <Title leading="none" weight="semibold" size="md">
          All orders
        </Title>
        <Button variant="outline">
          <Filter size="17" />
          Filter
        </Button>
      </CardContent>
      <CardFooter>
        <AllegroOrdersTableHeaderFilterForm />
      </CardFooter>
    </Card>
  )
}
