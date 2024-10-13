"use client"

import React, { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { usePathname, useSearchParams } from "next/navigation"
import {
  AllegroOrdersSearchParamsSchema,
  type AllegroOrdersSchema,
} from "@/constants/order/orders-search-params"
import { Filter, FilterX } from "lucide-react"

import { useLazyRouter } from "@/hooks/use-lazy-router"
import { useQueryString } from "@/hooks/use-query-string"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Title } from "@/components/ui/title"

const AllegroOrdersTableHeaderFilterForm = dynamic(
  () =>
    import(
      "@/components/@controllers/allegro/orders-table/allegro-orders-table-header-filter-form"
    ).then((mod) => mod.AllegroOrdersTableHeaderFilterForm),
  {
    loading: () => <Skeleton className="h-64 w-full" />,
  }
)

interface AllegroOrdersTableHeaderControllerProps {}

export function AllegroOrdersTableHeaderController(
  props: AllegroOrdersTableHeaderControllerProps
) {
  const { isPending, lazyPush } = useLazyRouter()
  const [open, setOpen] = useState(false)

  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = useMemo(
    () =>
      AllegroOrdersSearchParamsSchema.parse(Object.fromEntries(searchParams)),
    [searchParams]
  )

  const { createQueryString } = useQueryString(searchParams)

  const handleSubmitForm = (data: AllegroOrdersSchema) => {
    const queryString = createQueryString(data)
    const url = `${pathname}?${queryString}`
    lazyPush(url)
  }

  return (
    <Card className="sticky top-0 w-full">
      <CardContent className="flex items-center justify-between">
        <Title leading="none" weight="semibold" size="md">
          All orders
        </Title>
        <Button onClick={() => setOpen(!open)} variant="outline">
          {open ? <FilterX size="17" /> : <Filter size="17" />}
          Filter
        </Button>
      </CardContent>
      {open && (
        <CardFooter className="animate-in slide-in-from-top-2">
          <AllegroOrdersTableHeaderFilterForm
            onSubmit={handleSubmitForm}
            defaultValues={search}
          />
        </CardFooter>
      )}
    </Card>
  )
}
