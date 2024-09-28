"use client"

import * as React from "react"

import { Title } from "@/components/ui/title"

interface TableProviderProps extends React.PropsWithChildren {}

export function AllUsersTableProvider({ children }: TableProviderProps) {
  return (
    <>
      <div className="w-full overflow-x-auto">
        <Title size="lg">List of all users</Title>
      </div>
      {children}
    </>
  )
}
