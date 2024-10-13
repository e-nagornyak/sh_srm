"use client"

import * as React from "react"

interface TableProviderProps extends React.PropsWithChildren {}

export function AllegroOrdersTableProvider({ children }: TableProviderProps) {
  return (
    <>
      <div className="w-full space-y-2 overflow-x-auto rounded-lg">
        {children}
      </div>
    </>
  )
}
