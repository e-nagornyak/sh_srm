import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Text } from "@/components/ui/text"

interface OrderViewResponsoProps {}

export function OrderResponso(props: OrderViewResponsoProps) {
  return (
    <Card>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger>
              Responso - messages and disputes
            </AccordionTrigger>
            <AccordionContent className="flex h-96 items-center justify-center bg-white">
              <Text className="text-black dark:text-black">
                HERE WE WILL HAVE AN IFRAME FOR THE RESPONSE
              </Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
