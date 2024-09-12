"use memo"

import React from "react"

import { type SearchParams } from "@/types/table"
import { DataTableSkeleton } from "@/components/common/data-table/data-table-skeleton"
import { AllUsersTableProvider } from "@/components/common/users/all-users-table-provider"
import { AllUsersTableController } from "@/components/controllers/users/all-users-table/all-users-table-controller"
import { getUsers } from "@/components/controllers/users/all-users-table/helpers/all-users-table-queries"
import { allUsersSearchParamsSchema } from "@/components/controllers/users/all-users-table/helpers/all-users-table-search-params"
import { Shell } from "@/components/shared/shell"

interface ListPageProps {
  searchParams: SearchParams
}

export default async function ListPage({ searchParams }: ListPageProps) {
  const search = allUsersSearchParamsSchema.parse(searchParams)

  const usersPromise = getUsers(search)

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
          <AllUsersTableController
            searchParams={search}
            usersPromise={usersPromise}
          />
        </React.Suspense>
      </AllUsersTableProvider>
    </Shell>
  )
}
