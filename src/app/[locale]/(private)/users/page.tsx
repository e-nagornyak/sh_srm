"use memo"

import React from "react"

import { type SearchParams } from "@/types/table"
import { getAllUsers } from "@/lib/api/user/all-users-query"
import { allUsersSearchParamsSchema } from "@/lib/api/user/all-users-search-params"
import { DataTableSkeleton } from "@/components/common/data-table/data-table-skeleton"
import { AllUsersTableProvider } from "@/components/common/users/all-users-table/all-users-table-provider"
import { UsersTableController } from "@/components/controllers/users/users-table/users-table-controller"
import { Shell } from "@/components/shared/shell"

interface ListPageProps {
  searchParams: SearchParams
}

export default async function ListPage({ searchParams }: ListPageProps) {
  const search = allUsersSearchParamsSchema.parse(searchParams)

  const usersPromise = getAllUsers(search)

  return (
    <Shell className="gap-2">
      <AllUsersTableProvider>
        <React.Suspense
          fallback={
            <DataTableSkeleton
              columnCount={5}
              searchableColumnCount={1}
              filterableColumnCount={2}
              cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
              shrinkZero
            />
          }
        >
          <UsersTableController usersPromise={usersPromise} />
        </React.Suspense>
      </AllUsersTableProvider>
    </Shell>
  )
}
