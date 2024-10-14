"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import {
  orderStatuses,
  type OrderStatusEntity,
  type OrderStatusKeys,
} from "@/constants/order/order-statuses"
import { AllegroOrdersSearchParamsSchema } from "@/constants/order/orders-search-params"
import { CirclePlus, Loader, WalletCards } from "lucide-react"

import { RoutePaths } from "@/config/routes"
import { useLazyRouterWithTag } from "@/hooks/use-lazy-router-with-tag"
import { useQueryString } from "@/hooks/use-query-string"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// const groups = [
//   {
//     title: "IN PROGRESS (67)",
//     items: [
//       {
//         name: "New orders",
//         count: "64",
//         colorClass: "bg-blue-600",
//       },
//       {
//         name: "Personal receipt",
//         count: "3",
//         colorClass: "bg-yellow-600",
//       },
//     ],
//   },
//   {
//     title: "PROCESSED (9999+)",
//     items: [
//       {
//         name: "To be sent",
//         count: "47",
//         colorClass: "bg-blue-600",
//       },
//       {
//         name: "Sent",
//         count: "832",
//         colorClass: "bg-green-600",
//       },
//       {
//         name: "Realized",
//         count: "26784",
//         colorClass: "bg-gray-600",
//       },
//     ],
//   },
//   {
//     title: "RETURN (2661)",
//     items: [
//       {
//         name: "Cancelled",
//         count: "676",
//         colorClass: "bg-red-600",
//       },
//       {
//         name: "Returned",
//         count: "18",
//         colorClass: "bg-purple-600",
//       },
//       {
//         name: "Funds returned",
//         count: "26784",
//         colorClass: "bg-emerald-600",
//       },
//     ],
//   },
// ]

export function AllegroOrdersGroupsController() {
  const pathname = RoutePaths.private.orders.list

  const searchParams = useSearchParams()
  const { createQueryString } = useQueryString(searchParams)
  const { isPendingTag, lazyPush } = useLazyRouterWithTag()

  const search = React.useMemo(
    () =>
      AllegroOrdersSearchParamsSchema.parse(Object.fromEntries(searchParams)),
    [searchParams]
  )

  const memoizedStatuses = React.useMemo(
    (): OrderStatusEntity[] => Object.values(orderStatuses),
    []
  )

  const handleToAllOrdersList = () => {
    const queryString = createQueryString({ status: null })
    const url = `${pathname}?${queryString}`
    lazyPush(url)
  }

  const handleToStatus = (status: OrderStatusKeys) => {
    const queryString = createQueryString({ status })
    const url = `${pathname}?${queryString}`
    lazyPush(url, {}, status)
  }

  return (
    <Card className="top-[90px] xl:sticky xl:size-fit">
      <CardContent className="flex min-h-52 flex-col p-2 xl:max-w-fit">
        <Button disabled size="sm" className="mb-3 w-full gap-4 rounded-2xl">
          <CirclePlus />
          Add order
        </Button>
        <Button
          disabled={isPendingTag === "all"}
          onClick={handleToAllOrdersList}
          className="w-full justify-start gap-2 [&_svg]:size-4"
          variant={search?.status ? "ghost" : "outline"}
        >
          {isPendingTag === "all" ? (
            <Loader className="animate-spin" />
          ) : (
            <WalletCards />
          )}
          All
        </Button>
        <Separator />
        {memoizedStatuses?.map((status) => (
          <Button
            key={status?.key}
            disabled={isPendingTag === status?.key}
            onClick={() => handleToStatus(status?.key)}
            className="w-full justify-start gap-2 [&_svg]:size-4"
            variant={search?.status === status?.key ? "outline" : "ghost"}
          >
            {isPendingTag === status?.key ? (
              <Loader className="animate-spin" />
            ) : (
              status?.icon
            )}
            {status?.label}
          </Button>
        ))}
        {/*<Accordion disabled type="multiple" className="">*/}
        {/*  {groups?.map((item) => <GroupItem key={item?.title} {...item} />)}*/}
        {/*</Accordion>*/}
        {/*<Separator />*/}
        {/*<Button disabled className="w-full justify-start gap-2" variant="ghost">*/}
        {/*  <List size="15" />*/}
        {/*  Archive*/}
        {/*</Button>*/}
        {/*<Button disabled className="w-full justify-start gap-2" variant="ghost">*/}
        {/*  <Trash size="15" />*/}
        {/*  Bin*/}
        {/*</Button>*/}
        {/*<Separator />*/}
        {/*<Button disabled className="w-full justify-between" variant="ghost">*/}
        {/*  <div className="flex items-center gap-2">*/}
        {/*    <Plus size="15" />*/}
        {/*    Add status*/}
        {/*  </div>*/}
        {/*  <RefreshCcw size="15" />*/}
        {/*</Button>*/}
      </CardContent>
    </Card>
  )
}
//
// interface GroupItemProps {
//   title: string
//   items: { count: string; name: string; colorClass: string }[]
// }
//
// const GroupItem = ({ items, title }: GroupItemProps) => {
//   return (
//     <AccordionItem value={title}>
//       <AccordionTrigger
//         className={buttonVariants({
//           size: "sm",
//           variant: "ghost",
//           className: "justify-start pl-4",
//         })}
//       >
//         {title}
//       </AccordionTrigger>
//       <AccordionContent className="space-y-2 px-4">
//         {items?.map(({ name, count, colorClass }) => (
//           <button key={name} className="flex items-center gap-2">
//             <span
//               className={`min-w-5 rounded-sm p-0.5 text-xs text-white ${colorClass}`}
//             >
//               {count}
//             </span>
//
//             <Text size="xs">{name}</Text>
//           </button>
//         ))}
//       </AccordionContent>
//     </AccordionItem>
//   )
// }
