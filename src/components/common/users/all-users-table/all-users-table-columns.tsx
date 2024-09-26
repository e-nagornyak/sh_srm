"use client"

import * as React from "react"
import {
  DotsHorizontalIcon,
  MixerHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons"
import { type ColumnDef } from "@tanstack/react-table"

import { RoutePaths } from "@/config/routes"
import { type User } from "@/lib/api/user/user-types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@/components/ui/link"
import { DataTableColumnHeader } from "@/components/common/data-table/data-table-column-header"

export function getColumns(): ColumnDef<User>[] {
  return [
    {
      id: "select",
      enableSorting: false,
      enableHiding: false,
      size: 80,
      accessorKey: "id",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      ),
    },
    {
      enableSorting: false,
      enableHiding: false,
      accessorKey: "username",
      size: 1000,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="User Name" />
      ),
      cell: ({ row }) => (
        <div className="truncate">{row.getValue("username")}</div>
      ),
    },
    {
      enableSorting: false,
      enableHiding: false,
      accessorKey: "role",
      size: 250,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Role" />
      ),
      cell: ({ row }) => (
        <Badge className={"uppercase"}>{row.getValue("role")}</Badge>
      ),
    },
    {
      id: "actions",
      size: 50,
      cell: ({ row }) => {
        const userId = row?.original?.id

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex size-8 p-0 data-[state=open]:bg-muted"
              >
                <DotsHorizontalIcon className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-max">
              <DropdownMenuItem asChild>
                <Link
                  variant="ghost"
                  className="cursor-pointer"
                  href={RoutePaths.private.user.edit(userId)}
                >
                  <Pencil1Icon className="mr-2 size-5" />
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  variant="ghost"
                  className="cursor-pointer"
                  href={RoutePaths.private.user.delete(userId)}
                >
                  <TrashIcon className="mr-2 size-5" />
                  Delete
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
}
