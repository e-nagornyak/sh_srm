"use client"

import React, { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { usePathname, useSearchParams } from "next/navigation"
import {
  OrdersFiltersSchema,
  type OrdersFiltersSchemaType,
} from "@/constants/order/orders-search-params"
import { hasAnyPropertyValue } from "@/utils/has-any-property-value"
import { Filter, FilterX, Loader } from "lucide-react"

import useEffectAfterMount from "@/hooks/use-effect-after-mount"
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

  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = useMemo(
    () => OrdersFiltersSchema.parse(Object.fromEntries(searchParams)),
    [searchParams]
  )

  const [filter, setFilter] = useState<OrdersFiltersSchemaType>(search)
  const [open, setOpen] = useState(hasAnyPropertyValue(filter))

  const { createQueryString } = useQueryString(searchParams)

  const handleSubmitForm = (data: OrdersFiltersSchemaType) => {
    const queryString = createQueryString({ ...data, page: 1 })
    const url = `${pathname}?${queryString}`
    lazyPush(url)
  }

  const handleReset = () => {
    lazyPush(`${pathname}?page=1&limit=10`)
  }

  useEffectAfterMount(() => {
    setFilter(search)
  }, [searchParams])

  return (
    <Card className="sticky top-0 w-full">
      {isPending && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-accent p-4">
            <Loader size="50" className="animate-spin" />
          </div>
        </div>
      )}
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
            defaultValues={
              {
                order_id: filter?.order_id || null,
                status: filter?.status || null,
                product_name: filter?.product_name || null,
                delivery_address_country_code:
                  filter?.delivery_address_country_code || null,
                delivery_method: filter?.delivery_method || null,
                last_update_from: filter?.last_update_from || null,
                last_update_to: filter?.last_update_to || null,
                payment_finished: filter?.payment_finished || null,
                labels_shipment: filter?.labels_shipment || null,
                labels_factura: filter?.labels_factura || null,
                invoice_required: filter?.invoice_required || null,
              } as OrdersFiltersSchemaType
            }
            onReset={handleReset}
          />
        </CardFooter>
      )}
    </Card>
  )
}
