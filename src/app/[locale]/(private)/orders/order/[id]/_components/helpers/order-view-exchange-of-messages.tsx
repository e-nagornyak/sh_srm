import * as React from "react"
import { ChevronDown, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"

interface OrderViewMessagesProps {}

export function OrderViewExchangeOfMessages(props: OrderViewMessagesProps) {
  return (
    <Card>
      <CardContent className="space-y-6">
        <Title weight="semibold" size="xs">
          Exchange of messages
        </Title>
        <Text>
          No messages sent to the customer. No comments from the customer.
        </Text>
        <Button>
          <Mail size="15" />
          Write a message
          <ChevronDown />
        </Button>
      </CardContent>
    </Card>
  )
}
