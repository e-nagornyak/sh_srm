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

const groups = [
  {
    title: "IN PROGRESS (67)",
    items: [
      {
        name: "New orders",
        count: "64",
        colorClass: "bg-blue-600",
      },
      {
        name: "Personal receipt",
        count: "3",
        colorClass: "bg-yellow-600",
      },
    ],
  },
  {
    title: "PROCESSED (9999+)",
    items: [
      {
        name: "To be sent",
        count: "47",
        colorClass: "bg-blue-600",
      },
      {
        name: "Sent",
        count: "832",
        colorClass: "bg-green-600",
      },
      {
        name: "Realized",
        count: "26784",
        colorClass: "bg-gray-600",
      },
    ],
  },
  {
    title: "RETURN (2661)",
    items: [
      {
        name: "Cancelled",
        count: "676",
        colorClass: "bg-red-600",
      },
      {
        name: "Returned",
        count: "18",
        colorClass: "bg-purple-600",
      },
      {
        name: "Funds returned",
        count: "26784",
        colorClass: "bg-emerald-600",
      },
    ],
  },
]

interface AllegroOrdersTableGroupsProps {}

export function AllegroOrdersGroupsController(
  props: AllegroOrdersTableGroupsProps
) {
  return (
    <Card className="sticky top-[90px] size-fit">
      <CardContent className="min-h-52 w-full p-2">
        <Button size="sm" className="mb-3 w-full gap-4 rounded-2xl">
          <CirclePlus />
          Add order
        </Button>
        <Button className="w-full justify-start gap-2" variant="ghost">
          <WalletCards size="15" />
          All
        </Button>
        <Accordion type="multiple" className="">
          {groups?.map((item) => <GroupItem key={item?.title} {...item} />)}
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
      </CardContent>
    </Card>
  )
}

interface GroupItemProps {
  title: string
  items: { count: string; name: string; colorClass: string }[]
}

const GroupItem = ({ items, title }: GroupItemProps) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "justify-start pl-4",
        })}
      >
        {title}
      </AccordionTrigger>
      <AccordionContent className="space-y-2 px-4">
        {items?.map(({ name, count, colorClass }) => (
          <button key={name} className="flex items-center gap-2">
            <span className={`min-w-5 rounded-sm p-0.5 text-xs ${colorClass}`}>
              {count}
            </span>
            <Text size="xs">{name}</Text>
          </button>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
