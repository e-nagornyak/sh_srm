"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Title } from "@/components/ui/title"

interface TableProviderProps extends React.PropsWithChildren {}

export function AllegroOrdersTableProvider({ children }: TableProviderProps) {
  return (
    <>
      <div className="w-full space-y-2 overflow-x-auto rounded-lg">
        <Card className="w-full">
          <CardContent>
            <Title leading="none" weight="semibold" size="md">
              All orders
            </Title>
          </CardContent>
        </Card>
        {children}
      </div>
    </>
  )
}
