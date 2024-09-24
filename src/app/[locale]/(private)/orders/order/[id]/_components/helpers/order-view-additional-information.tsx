import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"

interface OrderViewAdditionalInformationProps {}

export function OrderViewAdditionalInformation(
  props: OrderViewAdditionalInformationProps
) {
  const items = [
    {
      displayName: "Commissions and fees",
      component: () => <div></div>,
      hintText: "",
    },
    {
      displayName: "Order payment history",
      component: () => <div></div>,
      hintText: "",
    },
    {
      displayName: "Order status history",
      component: () => <div></div>,
      hintText: "",
    },
    {
      displayName: "Order changes history",
      component: () => <div></div>,
      hintText: "",
    },
    {
      displayName: "Automatic actions history",
      component: () => <div></div>,
      hintText: "",
    },
    {
      displayName: "Order products pick pack history",
      component: () => <div></div>,
      hintText: "",
    },
  ]

  return (
    <Card className="">
      <CardContent>
        <Title weight="semibold" size="xs">
          Additional information
        </Title>
        <Accordion type="single" collapsible>
          <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger className="text-start">
              <Text color="highlight">
                9337bce0-7aa9-11ef-8474-c56f45d493db -transaction Allegro (show
                information)
              </Text>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="multiple" className="space-y-3">
          {items?.map(({ displayName, hintText, component }) => (
            <AccordionItem
              className="border-none"
              key={displayName}
              value={displayName}
            >
              <AccordionTrigger
                className={
                  "rounded-md border border-border p-2 hover:bg-background hover:no-underline"
                }
              >
                <Text>{displayName}</Text>
              </AccordionTrigger>
              <AccordionContent>{component()}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
